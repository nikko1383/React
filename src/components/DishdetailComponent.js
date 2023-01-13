import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    renderComments(comments) {
        if (comments != null){

            const cs = comments.map((comment) => {
                return (
                    <div>
                        <p>{comment.comment}</p>
                        <p> -- {comment.author}</p>
                    </div>
                );
            });

            return(
                <div>
                    <h4>Comments</h4>
                    { cs }
                </div>
            );
            }else{
            return(
                <div></div>
            );}
    }
    render() {
        if (this.props.selectedDish != null)
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                                <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish.comments)}
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
}

export default Dishdetail;