import React from "react";

export default function About() {
  

  return (
    <div class="accordion" id="accordionExample" >
      <div class="accordion-item" >
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            
          >
            Beautify
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Removes extra spaces between and around the input text.</strong>
          </div>
        </div>
      </div>
      <div class="accordion-item" >
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            
          >
            Casing
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Every first word of a sentence should start with capital letter</strong> 
          </div>
        </div>
      </div>
      <div class="accordion-item" >
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            
          >
            Punctuation
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <strong>Every paragraph should end with a fullstop</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
