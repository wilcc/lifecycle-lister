import React, { Component } from 'react';
import axios from 'axios';

class Placeholder extends Component {
  state = {
    album: [],
  };

  componentDidMount() {
    let updatedAlbum = [];
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        let albumCount = 1;
        response.data.map((each) => {
          if (each.albumId === albumCount && albumCount <= 20) {
            updatedAlbum.push(each);
            albumCount++;
          }
        });

        this.setState({
          album: updatedAlbum,
        });
      });
  }
  render() {
    console.log(this.state.album);
    return (
      <div>
        {this.state.album.length !== 0 ? (
          <div>
            <ul style={{ lineHeight: '2em', fontSize: '3rem' }}>
              {this.state.album.map((item, idx) => {
                return (<li key={idx}>Title: {item.title} <br/>
                url:{item.url} <br/>
                thumbnail:<img src={item.thumbnailUrl}></img>
                </li>);
              })}
            </ul>
          </div>
        ) : (
          <div>loading</div>
        )}
      </div>
    );
  }
}

export default Placeholder;
