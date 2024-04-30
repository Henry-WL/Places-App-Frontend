import React, { useState, useContext, useEffect } from "react";

import "./PlaceItem.css";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHistory } from "react-router-dom";

const PlaceItem = (props) => {
  const { isLoading, error, clearError, sendRequest } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState(props.comments)
  // const [showComments, setShowComments] = useState(true)

  // console.log(props)
  // console.log(auth.userId)

  const history = useHistory()

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);

    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL +  `/places/${props.id}`,
        "DELETE", null, {
          Authorization: 'Bearer ' + auth.token
        }
      );
      /*
      await sendRequest("http://localhost:5001/api/places", "POST", formData, {
        Authorization: 'Bearer ' + auth.token
      });
      */
      // history.go(0);
      props.onDelete(props.id);
    } catch (err) {
      console.log(err);
    }
  };

  const addCommentHandler = async (event) => {
    event.preventDefault()
    console.log('first')
    console.log(commentText)

    let responseData

    try {
      responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `/places/comment/${props.id}`, 'PUT', 
      JSON.stringify({
        "comment": {
          "text": commentText,
          "postedBy": auth.userId,
        },
        "userId": auth.userId
      }),
      {Accept: "application/json",
      "Content-Type": "application/json"}
      )
      // setComments([...comments, responseData.comment])
      setCommentText('')
    } catch(err) {
      console.log(err)
    }

    props.addComment(responseData, props.id)
  }

  const deleteCommentHandler = async (id, comment) => {

    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/places/uncomment/${props.id}`, 
        "PUT", 
        JSON.stringify({
          "comment": {
            "_id": comment._id,
          }
        }),
        {
          Accept: "application/json",
          "Content-Type": "application/json"
        }

      )
     
    } catch(err) {
      console.log(err)
    }


    props.deleteComment(id, comment, props.id)
    // setComments(comments.filter(c => c.id !== id))
  }


  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>

      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-iten__content">
          {isLoading && <LoadingSpinner asOverlay/>}
          <div className="place-item__image">
            <img src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            {auth.userId === props.creatorId && (
              <Button to={`/places/${props.id}`}>EDIT</Button>
            )}
            {auth.userId === props.creatorId && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>

          <div>
            comments
            
            {auth.isLoggedIn && <div>
                <form onSubmit={addCommentHandler}>
                  <input value={commentText} onChange={(e) => setCommentText(e.target.value)}></input>
                  <button type="submit">Add</button>
                </form>
              </div>}

            {!isLoading && props.comments.map((comment) => {
              // console.log(comment)
              return (
                <div key={comment.id} style={{border: "1px solid black"}}>
                  single comment
                  <p>{comment.text}</p>

                  {comment.postedBy === auth.userId && <button onClick={() => deleteCommentHandler(comment.id, comment)}>delete</button>}
                </div>
              )
            })}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
