import image from "../images/image.jpg";
import getDateString from "./date.js";
import "../styles/styles.scss";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all";
import "../index.html";

$(() => {
  //Print the current time
  $(".js-content").html(`<i class="fas fa-clock"></i> ${getDateString()}`);
  // Display the image
  $("<img />")
    .attr("src", image)
    .attr("alt", "Descriptive alt text")
    .appendTo("body");
  //Display the Bootstrap modal window
  const modalElement = $(".js-modal");
  const modalInstance = new bootstrap.Modal(modalElement[0], {
    keyboard: true,
  });
  modalInstance.show();
});
