import React, { Component } from 'react';
import { Posts } from '../../../api/posts.js'; 
export default class Post extends Component {

  constructor(props) {
    super(props);
    this.deleteHandler.bind(this)
  }

  deleteHandler(id) {
    Posts.remove(id);
  }

  renderDeleteButton () {
    if ( Meteor.user() &&  Meteor.user().emails){
      const emailNow = Meteor.user().emails[0].address;
      if (this.props.post.email === emailNow) {
        return (
          <div><button onClick={()=>this.deleteHandler(this.props.post._id)}>delete</button></div>
        )
      }else {
        return  <div></div>
      }
    } else {
      console.log('loading...')
    }
  }

  render() {
    return (
        <section className="notice">
            <div>
              <p>Имя и почта продавца: {this.props.post.name}  ({this.props.post.email})</p> 
            </div>
            <div>
              <p>Товар или услуга: </p>{this.props.post.description}
            </div>
            <div>
              <p>Стоимость в грн: {this.props.post.cost}</p>
            </div>
            {this.renderDeleteButton()}
        </section>
    );
  }
}