import React, { useEffect, useState } from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";

const UserPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/places/user/${userId}`
        );

        console.log(responseData)

        setLoadedPlaces(responseData.places);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPlaces();
  }, [userId, sendRequest]);
  

  const placeDeletedHandler = (deletedPlaceId) => {
    setLoadedPlaces(prevPlaces => prevPlaces.filter(place => place.id !== deletedPlaceId))
  }

  const deleteComment = (deletedCommentId, comment, placeId) => {
    console.log(deletedCommentId, comment, placeId)
    console.log(loadedPlaces)

    console.log('place ID CHECK', loadedPlaces[0].id === placeId)

    setLoadedPlaces(prevPlaces => {
      return prevPlaces.map((place) => {
        if (place.id === placeId) {
          return {
            ...place,
            comments: place.comments.filter((c) => c.id !== deletedCommentId)
          }
        } 
        return place;
      })
    })
  }

  const addComment = (responseData, placeId) => {
    const lastArrayIndex = responseData.comments.length - 1
    const lastComment = responseData.comments[lastArrayIndex]

    setLoadedPlaces(prevPlaces => {
      return prevPlaces.map((place) => {
        if (place.id === placeId) {
          return {
            ...place,
            comments: [...place.comments, lastComment]
          }
        }
        return place
      })
    })

  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner asOverlay />
        </div>
      )}
      {!isLoading && loadedPlaces && <PlaceList items={loadedPlaces} onDeletePlace={placeDeletedHandler} deleteComment={deleteComment} addComment={addComment} />}
    </React.Fragment>
  );
};

export default UserPlaces;
