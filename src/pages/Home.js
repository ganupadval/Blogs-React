import React, { useState } from "react";

import "../style.css";
import Dictionary from "../components/Dictionary";
import Vote from "../components/Vote";
import Qna from "../components/Qna";
import Layout from "../components/Layout";

export default function Home() {

  const [Lookup, setLookup] = useState("");

  function getSelectedText() {
    if (window.getSelection) return window.getSelection().toString();
    else if (document.getSelection) return document.getSelection();
    else if (document.selection) return document.selection.createRange().text;
    return "";
  }
 const showLayer = function (e) {
           e.preventDefault();
      setLookup = getSelectedText();
      Lookup = Lookup.replace(/[\.\*\?;!()\+,\[:\]<>^_`\[\]{}~\\\/\"\'=]/g, " ");
      Lookup = Lookup.replace(/\s+/g, " ");
      alert(Lookup);
    
    }
  // function setupDoubleClick(areaclassName, maxAllowedWords) {
  //   //shows the definition layer
  //   var showLayer = function (e) {
  //     e.preventDefault();
  //     var lookup = getSelectedText();
  //     lookup = lookup.replace(/[\.\*\?;!()\+,\[:\]<>^_`\[\]{}~\\\/\"\'=]/g, " ");
  //     lookup = lookup.replace(/\s+/g, " ");
  //     if (lookup != null && lookup.replace("/s/g", "").length > 0) {
  //       //disable the double-click feature if the lookup string
  //       //exceeds the maximum number of allowable words
  //       if (maxAllowedWords && lookup.split(/[ -]/).length > maxAllowedWords)
  //         return;

  //       //append the layer to the DOM only once
  //       if ( ("#definition_layer").length === 0) {
  //         // var imageUrl = websiteUrl + "external/images/doubleclick/definition-layer.gif";
  //          ("body").append(
  //           <div id='definition_layer' style={{position:'absolute', cursor:'pointer'}}><img src='src\assets\definition-layer.gif' alt='' title=''/></div>
  //         );
  //       }

  //       //move the layer at the cursor position
  //        ("#definition_layer").map(function () {
  //          (this).css({ left: e.pageX - 30, top: e.pageY - 40 });
  //       });

  //       //open the definition popup clicking on the layer
  //        ("#definition_layer").mouseup(function (e) {
  //         e.stopPropagation();

  //         // openPopup(lookup, translateDictionary);
  //       });
  //     } else {
  //        ("#definition_layer").remove();
  //     }
  //   };

  //   // var area = areaclassName ? "." + areaclassName : "body";
  //   // (area).mouseup(showLayer);

  // }

  return (
    <div>
      <Layout>
      <div className="main">
        <div className="topic_list">
          <li>Topic List</li>
        </div>

        <div className="content">
          <div className="content_header">
            <h2>What Not to Say to Someone With Schizophrenia</h2>
            <div>
              <button
                style={{ margin: "2px", padding:'0px 5px' }}
                type="button"
                className="btn btn-outline-primary btn-sm"
              >
                Share
              </button>

              <button
                style={{ margin: "2px", padding:'0px 5px'}}
                type="button"
                className="btn btn-outline-primary btn-sm"
              >
                Print
              </button>
              <button
                style={{ margin: "2px", padding:'0px 5px' }}
                type="button"
                className="btn btn-outline-primary btn-sm"
              >
                Feedback
              </button>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%" }}>
                <span className="content_details">By</span>
                <span className="content_details"> Lisa Guardiola</span> •
                <span className="content_details"> Last Edited: 9/12/2022 </span> •
                <span className="content_details"> Views: 3,925</span>
              </div>
              <div style={{ textAlign: "end", width: "50%" }}>
                <span className="content_details">
                  % of readers found this article <b>helpful</b>.
                </span>
              </div>
            </div>
          </div>

          <div id="target_div" className="content_text">
            <p>
              When I was first diagnosed with schizophrenia, I often found that
              it was difficult to come out of my shell and meet new people. As
              the years went by and the more I came into my mental health
              recovery, the easier it became to get to know others. In my
              interactions, I’ve found that most people aren’t only surprised
              that I am living with schizophrenia, but that they don’t know what
              to say to me. As well-intended as they may be, some have asked
              questions or made statements to me that have been more harmful
              than good. Here are examples of what not to say to someone living
              with schizophrenia.
            </p>

            <strong>How many personalities do you have?</strong>
            <p>
              This is a common question that many people ask if you are living
              with schizophrenia. It’s very problematic because many don’t
              understand that schizophrenia and dissociative identity disorder
              (formerly known as split personality) are two different disorders.
              Schizophrenia means a “split mind,” and the individual living with
              this disorder has had some type of split from reality. When
              symptomatic, they have a hard time distinguishing what is real.
              Dissociative identity disorder (DID) is a mental health condition.
              Someone with DID has multiple, distinct personalities. The various
              identities control a person's behavior at different times. The
              condition can cause memory loss, delusions, or depression and is
              usually caused by past trauma.
            </p>
            <strong>It’s all in your head!</strong>
            <p>
              This is not a great thing to say to someone living with
              schizophrenia. While what they’re feeling is all in their head, it
              doesn’t make it any less real to the person who is experiencing
              symptoms. This comes off as condescending, dismissive, and having
              no empathy for the individual living with schizophrenia.
            </p>
            <strong>What do your voices say to you?</strong>
            <p>
              This is a very inconsiderate question to ask someone living with
              schizophrenia, especially if you’re not part of their support
              network. Asking someone what the voices say isn’t something you
              should do unless you have a close relationship with them and they
              feel comfortable sharing that with you. Asking about their
              hallucinations or delusions can be very triggering and make their
              symptoms worse, and you are intruding on their privacy as well.{" "}
            </p>
          </div>

        </div>
        <Dictionary />
      </div>
          <div className="content-card">
            <Vote/>
          </div>
          <div className="content-card">
            <Qna/>
          </div>
      </Layout>
    </div>
  );
}
