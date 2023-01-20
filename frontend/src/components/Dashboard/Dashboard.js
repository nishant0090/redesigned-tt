import React from "react";
import { Container } from "react-bootstrap";
import "./Dashboard.css";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();
  return <Container className="mt-5 pt-5">Dashboard</Container>;
}

// import React, { useState, useEffect } from "react";
// import { storage } from "../firebase";
// import "firebase/storage";
// import {
//   Card,
//   Button,
//   Alert,
//   Container,
//   Form,
//   Row,
//   Col,
// } from "react-bootstrap";
// import { useHistory } from "react-router-dom";

// export default function Dashboard() {
//   const [files, setFiles] = useState();
//   const [stud, setStud] = useState();
//   const [vid, setVid] = useState();

//   useEffect(() => {
//     const fetchImages = async () => {
//       let result = await storage.ref().child("images").listAll();
//       let urlPromises = result.items.map((imageRef) =>
//         imageRef.getDownloadURL()
//       );

//       return Promise.all(urlPromises);
//     };

//     const loadImages = async () => {
//       const urls = await fetchImages();
//       setFiles(urls);
//       console.log(urls);
//     };

//     const getImages = async () => {
//       let result = await storage.ref().child("images/students").listAll();
//       let urlPromises = result.items.map((imageRef) =>
//         imageRef.getDownloadURL()
//       );

//       return Promise.all(urlPromises);
//     };

//     const loadstud = async () => {
//       const urls = await getImages();
//       setStud(urls);
//       console.log(urls);
//     };

//     const getVideos = async () => {
//       let result = await storage.ref().child("images/videos").listAll();
//       let urlPromises = result.items.map((imageRef) =>
//         imageRef.getDownloadURL()
//       );

//       return Promise.all(urlPromises);
//     };

//     const loadVideos = async () => {
//       const urls = await getVideos();
//       setVid(urls);
//       console.log(urls);
//     };
//   }, []);

//   const [error, setError] = useState("");
//   const history = useHistory();

//   const [file, setFile] = useState(null);

//   function handleChange(e) {
//     if (e.target.files[0]) setFile(e.target.files[0]);
//   }

//   return (
//     <>
//       {/* <Banner /> */}

//       <Container
//         className="d-flex align-items-center justify-content-center"
//         style={{ minHeight: "100vh" }}
//       >
//         <div className="w-100" style={{ maxWidth: "400px" }}>
//           {/* <Card style={{marginBottom: "4rem"}}>
//         <Card.Body>
//           <h2 className="text-center mb-4">Upload Photo</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleStudUpload}>
//             <p>Upload photographs of students</p>
//             <input type="file" onChange={handleChange} />
//             <Button className="w-100" type="submit">
//               Upload to Firebase
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card> */}

//           {/* <Card style={{marginBottom: "4rem"}}>
//         <Card.Body>
//           <h2 className="text-center mb-4">Upload Snapshot</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleUpload}>
//             <p>Upload snapshots of the class</p>
//             <input type="file" onChange={handleChange} />
//             <Button disabled={!file} className="w-100" type="submit">
//               Upload to Firebase
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card> */}

//           {/* <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Upload Video</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleVidUpload}>
//             <p>Upload a class recording</p>
//             <input type="file" onChange={handleChange} />
//             <Button className="w-100" type="submit">
//               Upload to Firebase
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card> */}
//         </div>
//       </Container>
//     </>
//   );
// }
