// import React, { useState } from "react";

// App
// var AppTry = React.createClass({
//   getInitialState: function() {
//     return {
//       movies: {},
//     };
//   },

//   addMovie: function(movieData) {
//     var timeStamp = new Date().getTime();

//     this.state.movies["movie-id" + timeStamp] = movieData;

//     this.setState({
//       movies: this.state.movies,
//     });
//     console.log(movieData);
//   },

//   editmovie: function(movieID, editedData) {
//     this.state.movies[movieID].movieBody = editedData;
//     this.setState({
//       movies: this.state.movies,
//     });

//     console.log("Edited text:", editedData);
//   },

//   deletemovie: function(movieID) {
//     delete this.state.movies[movieID];

//     this.setState({
//       movies: this.state.movies,
//     });
//   },

//   rendermovie: function(key) {
//     return (
//       <li className="">
//         <Newmovie
//           key={key}
//           index={key}
//           details={this.state.movies[key]}
//           editmovie={this.editmovie}
//           deletemovie={this.deletemovie}
//         />
//       </li>
//     );
//   },

//   render: function() {
//     return (
//       <div className="row medium-8 large-7 columns">
//         <ol className="movie-list block-movies">
//           {Object.keys(this.state.movies)
//             // Creating a NEW array
//             .map(this.rendermovie)}
//         </ol>
//         <AddMovieForm addMovie={this.addMovie} />

//         <pre>{JSON.stringify(this.state, null, 2)}</pre>
//       </div>
//     );
//   },
// });

// function AppTry() {
//   const [movies, setMovies] = useState({});

//   const addMovie = (movieData) => {
    // let timeStamp= newDate().getTime();
  

  //   addMovie: function(movieData) {
  //     var timeStamp = new Date().getTime();

  //     this.state.movies["movie-id" + timeStamp] = movieData;

  //     this.setState({
  //       movies: this.state.movies,
  //     });
  //     console.log(movieData);
  //   },

  //   editmovie: function(movieID, editedData) {
  //     this.state.movies[movieID].movieBody = editedData;
  //     this.setState({
  //       movies: this.state.movies,
  //     });

  //     console.log("Edited text:", editedData);
  //   },

  //   deletemovie: function(movieID) {
  //     delete this.state.movies[movieID];

  //     this.setState({
  //       movies: this.state.movies,
  //     });
  //   },

  //   rendermovie: function(key) {
  //     return (
  //       <li className="">
  //         <Newmovie
  //           key={key}
  //           index={key}
  //           details={this.state.movies[key]}
  //           editmovie={this.editmovie}
  //           deletemovie={this.deletemovie}
  //         />
  //       </li>
  //     );
  //   },

  //   render: function() {
  //     return (
  //       <div className="row medium-8 large-7 columns">
  //         <ol className="movie-list block-movies">
  //           {Object.keys(this.state.movies)
  //             // Creating a NEW array
  //             .map(this.rendermovie)}
  //         </ol>
  //         <AddMovieForm addMovie={this.addMovie} />

  //         <pre>{JSON.stringify(this.state, null, 2)}</pre>
  //       </div>
  //     );
  //   }


/*
    Add movie Form
    <AddMovieForm />
  */
// var AddMovieForm = React.createClass({
//   processmovie: function(event) {
//     event.preventDefault();

//     // 1. Take data from form
//     var movieData = {
//       movieName: this.refs.name.value,
//       movieBody: this.refs.desc.value,
//     };

//     // 2. Pass data back to App
//     this.props.addmovie(movieData);

//     // 3. Reset the form
//     this.refs.movieForm.reset();
//   },

//   render: function() {
//     return (
//       <div className="callout secondary">
//         <h4 className="leave-movie">Add a movie</h4>
//         <form
//           className="post-edit"
//           ref="movieForm"
//           onSubmit={this.processmovie}
//         >
//           <input type="text" ref="name" placeholder="Your Name" required />
//           <textarea ref="desc" placeholder="Add your movie here" required />
//           <button
//             id="submit"
//             type="submit"
//             className="button button-outline movie-button action-button expand-right"
//           >
//             Add movie
//           </button>
//         </form>
//       </div>
//     );
//   },
// });

// /*
//     Newmovie
//     <Newmovie />
//   */
// var Newmovie = React.createClass({
//   getInitialState: function() {
//     return {
//       editMode: false,
//     };
//   },

//   rendermovieRead: function() {
//     return (
//       <div className="movie-text">
//         <p>{this.props.details.movieBody}</p>
//       </div>
//     );
//   },

//   editmovieHandler: function(event) {
//     event.preventDefault();

//     this.props.editmovie(this.props.index, this.refs.editText.value);

//     this.setState({
//       editMode: false,
//     });
//   },

//   deletemovieHandler: function() {
//     this.props.deletemovie(this.props.index);
//   },

//   rendermovieEdit: function() {
//     return (
//       <form
//         className="post-edit"
//         ref="movieForm"
//         onSubmit={this.editmovieHandler}
//       >
//         <textarea ref="editText" required>
//           {this.props.details.movieBody}
//         </textarea>
//         <button
//           id="submit"
//           type="submit"
//           className="button button-outline movie-button action-button expand-right"
//         >
//           Done
//         </button>
//       </form>
//     );
//   },

//   enterEditMode: function() {
//     if (!this.state.editMode) {
//       this.setState({
//         editMode: true,
//       });
//     }
//   },

//   render: function() {
//     return (
//       <div className="block-movie-content module text">
//         <div className="movie-user">
//           <div className="movie-user-avatar-wrap">
//             <a>
//               <img
//                 src="http://spacecentre.co.uk/wp-content/uploads/2017/03/deepspace-image5.jpg"
//                 className="movie-avatar"
//                 alt=""
//               />
//             </a>
//           </div>
//           <div className="movie-user-text">
//             <a href="#0" data-username="cathbailh" className="movie-username">
//               <span className="username">{this.props.details.movieName}</span>
//             </a>
//             <span className="on"> on </span>
//             <a href="#0">
//               <time className="block-movie-time">{new Date().getTime()}</time>
//             </a>
//             <span className="edit-movie">
//               <i
//                 className="fa fa-pencil edit-btn"
//                 aria-hidden="true"
//                 onClick={this.enterEditMode}
//               ></i>
//               <i
//                 className="fa fa-trash-o del-btn"
//                 aria-hidden="true"
//                 onClick={this.deletemovieHandler}
//               ></i>
//             </span>
//           </div>
//         </div>
//         {this.state.editMode ? this.rendermovieEdit() : this.rendermovieRead()}
//       </div>
//     );
//   },
// });

// export default { AppTry, Newmovie };
