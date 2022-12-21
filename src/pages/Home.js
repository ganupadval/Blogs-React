import React, { useState , useEffect } from "react";
import SetupDoubleClick from "./DoubleClick";
import "../style.css";
import Dictionary from "../components/Dictionary";
import Vote from "../components/Vote";
import Qna from "../components/Qna";
import Layout from "../components/Layout";


export default function Home() {
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  // const lookup = "view";
  const [lookup, setLookup] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  function set(a){
    setLookup(a)
    console.log(a)
  }
  useEffect(() => {
    fetch(url + lookup)
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
        console.log(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [lookup]);



  return (
    <div>
      <Layout>
        <div className="main">
          <SetupDoubleClick set={set}/>
          {/* <DictionaryLookup areaClass={null}/> */}
          <div className="topic_list">
            <li>Topic List</li>
          </div>

          <div className="content">
            <div className="content_header">
              <h2>What Not to Say to Someone With Schizophrenia</h2>
              <div>
                <button
                  style={{ margin: "2px", padding: "0px 5px" }}
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                >
                  Share
                </button>

                <button
                  style={{ margin: "2px", padding: "0px 5px" }}
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                >
                  Print
                </button>
                <button
                  style={{ margin: "2px", padding: "0px 5px" }}
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
                  <span className="content_details">
                    {" "}
                    Last Edited: 9/12/2022{" "}
                  </span>{" "}
                  •<span className="content_details"> Views: 3,925</span>
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
                When I was first diagnosed with schizophrenia, I often found
                that it was difficult to come out of my shell and meet new
                people. As the years went by and the more I came into my mental
                health recovery, the easier it became to get to know others. In
                my interactions, I’ve found that most people aren’t only
                surprised that I am living with schizophrenia, but that they
                don’t know what to say to me. As well-intended as they may be,
                some have asked questions or made statements to me that have
                been more harmful than good. Here are examples of what not to
                say to someone living with schizophrenia.
              </p>

              <strong>How many personalities do you have?</strong>
              <p>
                This is a common question that many people ask if you are living
                with schizophrenia. It’s very problematic because many don’t
                understand that schizophrenia and dissociative identity disorder
                (formerly known as split personality) are two different
                disorders. Schizophrenia means a “split mind,” and the
                individual living with this disorder has had some type of split
                from reality. When symptomatic, they have a hard time
                distinguishing what is real. Dissociative identity disorder
                (DID) is a mental health condition. Someone with DID has
                multiple, distinct personalities. The various identities control
                a person's behavior at different times. The condition can cause
                memory loss, delusions, or depression and is usually caused by
                past trauma.
              </p>
              <strong>It’s all in your head!</strong>
              <p>
                This is not a great thing to say to someone living with
                schizophrenia. While what they’re feeling is all in their head,
                it doesn’t make it any less real to the person who is
                experiencing symptoms. This comes off as condescending,
                dismissive, and having no empathy for the individual living with
                schizophrenia.
              </p>
              <strong>What do your voices say to you?</strong>
              <p>
                This is a very inconsiderate question to ask someone living with
                schizophrenia, especially if you’re not part of their support
                network. Asking someone what the voices say isn’t something you
                should do unless you have a close relationship with them and
                they feel comfortable sharing that with you. Asking about their
                hallucinations or delusions can be very triggering and make
                their symptoms worse, and you are intruding on their privacy as
                well.{" "}
              </p>
            </div>
          </div>
          <Dictionary  lookup={lookup} data={data} loading={loading} error={error} />
        </div>
        <div className="content-card">
          <Vote />
        </div>
        <div className="content-card">
          <Qna />
        </div>
      </Layout>
    </div>
  );
}
