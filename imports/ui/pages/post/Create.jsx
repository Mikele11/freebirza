import React from 'react';
import create from './create.css';
import { Posts } from '../../../api/posts.js';
export default class Create extends React.Component {

  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      cost: 0,
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  addPost (event) {
    event.preventDefault();
    if (Meteor.user()) {
      const email = Meteor.user().emails[0].address;
      const { name, description, cost } = this.state;
      if (name && description && (cost>0)) {
        Posts.insert({ name, description, cost, email })
        this.props.history.push("/")
      }
    } else {
      console.log('Cant find user')
    }
  }

  render() {
    const { name, description, cost } = this.state;
    return (
      <section className="container createpost">
        <div>
          <h4 className="headerCreatePost">Оставьте свою заявку</h4>
        </div>
        <section>
          <div>
            <p>Введите Ваше имя</p>
            <input name="name" value={name} onChange={this.onChange} type="text" placeholder="Введите свое имя"/>
          </div>
          <div>
            <textarea name="description" value={description} onChange={this.onChange} id="" cols="30" rows="10" placeholder="Введите описание товара"></textarea>
          </div>
          <div>
            <p>Стоимость товара или услуги</p>
           <input name="cost" value={cost} onChange={this.onChange} type="number"/>
          </div>
          <div><button onClick={this.addPost.bind(this)}>Отправить на доску</button></div>
        </section>    
      </section>
    );
  }
}