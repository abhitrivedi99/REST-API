const express = require('express');

const router = express.Router();

const Post = require('../models/Post');


//see all posts

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({msg : err});
    }
});

//add any data to post

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }
    catch(err){
        console.log('err');
    };

    // post.save()
    // .then(data =>{
    //     res.json(data);
    // })
    // .catch(err =>{
    //     res.json({msg: err});
    });

//find a post by id

router.get('/:postId', async (req, res) =>{
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
   }
    catch(err){
        res.json({msg : err});
    }
        
});


//delete a post by id

router.delete('/:postId', async (req, res) =>{
    try{
    const removedPost = await Post.remove({_id : req.params.postId});
    res.json(removedPost);
    }
    catch(err){
        res.json({msg : err});
    }
});

//update a post by id

router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId}, 
            {$set : {title: req.body.title}}, 
        );
        res.json(updatedPost);
    }
    catch(err){
        res.json({msg: err});
    }
});
    

module.exports = router;