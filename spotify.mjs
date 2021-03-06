  import fetch from "node-fetch";
  /* Load the HTTP library */
  var http = require("http");
  //var assert = require('assert')
  //const express = require('express');
  //import express from 'express';
  /* Create an HTTP server to handle responses */

  http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);
  
  fetch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${userAccessToken}`
    }
  })
  .then(response => response.json())
  //
  .then(({beats}) => {
    beats.forEach((beat, index) => {
      console.log(`Beat ${index} starts at ${beat.start}`);
    })
  })