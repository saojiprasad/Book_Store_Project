import express, { request, response } from "express";
import mongoose from "mongoose";
import { PORT , mongoDBURL} from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoutes from "./routes/booksRoute.js"
// const cors = require('cors');
import cors from "cors";
// const PORT=5555;

const app=express();

//MiddleWare for parsing request body
app.use(express.json());

// Allow All origins
app.use(cors());
 
//2 Allow Custom Origin

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );


app.get("/",(req,res)=>{
     console.log(res);
     return res.status(234).send("WELCOME MOTHERFUCKER");
});

app.use('/books',booksRoutes);

// //Route for Save a new book
// app.post('/books' , async(req,res)=>{
//     try{
//         if(
//             !req.body.title||
//             !req.body.author||
//             !req.body.publishYear
//         ){return res.status(400).send({message: "send all required fields: title, author, publishYear"})
//     }
//     const newBook={
//         title: req.body.title,
//         author: req.body.author,
//         publishYear: req.body.publishYear,
//     };
//     const book = await Book.create(newBook);
//     return res.status(201).send(book);
//     }catch(error){
//         // console.log("catch");
//         console.log(error.message);
//         res.status(500).send({ message:error.message })
//     }
// });

// //Route for get all books from database
// // app.get('/books',async (request,response)=>{
// //     try{
// //         const books=await Book.find({});
// //         return response.status(200).json(
// //             {
// //                 count: books.length,
// //                 data: books
// //             }
// //         );
// //     }
// //     catch(error){
// //         console.log(error.message);
// //         response.status(500).send({message:error.message});
// //     }
// // });


// //Route for get One books from database
// app.get('/books/:id',async (request,response)=>{
//     try{

//         const {id}=request.params;
//         const book=await Book.findById(id);
//         return response.status(200).json(book);
//     }
//     catch(error){
//         console.log(error.message);
//         response.status(500).send({message:error.message});
//     }
// });

// //Route for Update a Book 
// app.put('/books/:id', async(request,response)=>{
//     try{
//         const {id}=request.params;

//         if (!mongoose.isValidObjectId(id)) {
//             return response.status(400).json({ message: 'Book not found' });
//           }

//         if(
//             !request.body.title||
//             !request.body.author||
//             !request.body.publishYear
//         ){return response.status(400).send({message: "send all required fields: title, author, publishYear"});
//     }
    
//     const result=await Book.findByIdAndUpdate(id,request.body,{ new: true });

//     if(!result){
//         return response.status(404).json({message:''});
//     }

//     }
//     catch(error){
//         console.log("catch")
//         console.log(error.message);
//         response.status(500).send({message : error.message});
//     }
// })

// // Route for deleting a Book

// app.delete('/books/:id',async(request,response)=>{
//     try{
//         const {id}=request.params;

//         const result = await Book.findByIdAndDelete(id);

//         if(!result){
//             return response.status(404).json({message:"Book Not Found"});
//         }

//         return response.status(200).send({message:'Book deleted successfully'})

//     }
//     catch(error){
//         console.log("catch")
//         console.log(error.message);
//         response.status(500).send({message : error.message});
//     }

// });



mongoose.connect(mongoDBURL)
.then(()=>{
    console.log("App is successfully Connected to Database");
    app.listen(PORT,()=>{
        console.log("RUNNING")
    });
})
.catch((error)=>{
    console.log(error);
})