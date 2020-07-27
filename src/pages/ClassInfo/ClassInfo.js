import React from 'react';
import {Container} from 'react-bootstrap';

const ClassInfo = () => {
  return (
    <Container style={{textAlign: 'start', paddingTop: 40, paddingBottom: 40}}>
      <div>
        {/* Turnitin.com Information: */}
        {/* Class ID- 25510210 Password Radiohead  */}
      </div>
      <div style={{paddingTop: 10, paddingBottom: 10}}>
        <h3>Group Work</h3>- Unlike offline classes, groups will change on a
        daily basis. It is hoped that this will make the online situation more
        dynamic and give people a chance to meet and work with a variety of
        people.
      </div>
      <div style={{paddingTop: 10, paddingBottom: 10}}>
        <h3>Class Homework</h3>- Instead of having each group member choose one
        role, students will be required to complete a part of each different
        role.
        <div>The following are the new requirements:</div>
        <h5>Role #1: Discussion Director</h5>
        <div>
          - Each student will make up 1 discussion question. Answers must be
          provided.
        </div>
        <h5>Role #2: Connector</h5>
        <div>
          - Each student will make up 1 discussion question. An answer must be
          provided.
        </div>
        <h5>Role #3 :Vocabulary Wizard or Passage Picker</h5>- If the vocabulary
        wizard is selected, 2 vocabulary items (with definition & example
        sentence) and 1 discussion question for each word is required. If the
        Passage Picker is selected, 1 discussion question is required. Answers
        to all discussion questions must be provided.
        <h5>
          Role #4 : The Youtuber, Image Presenter, The Quoter, The Photographer
          and The Researcher
        </h5>
        - Each student is required to choose 1 from this section. 2 discussion
        questions are required, and answers must be provided. It is encouraged
        that you rotate daily and complete all the different parts from Role #
        4.
        <div style={{paddingTop: 10, paddingBottom: 10}}>
          ** Each group of 4 will have between 20-24 discussion questions. Of
          course, it is not expected that you will have a chance to talk about
          every single question. During your discussions, I am sure that your
          group will frequently go off topic, this is encouraged and part of
          natural conversation. If there is a silence or “dead air”, you will
          have plenty of discussion questions to fall back on. Try to make your
          discussion questions interesting. I will give you approximately an
          hour to speak in your groups.
        </div>
        <div>
          <h5>Presentations</h5>
          <div>
            Each student will be required to give 2 6-7 minute presentations.
            Following each presentation there will be a short Q n A session. Be
            prepared to ask and answer questions. A portion of your daily
            participation mark will be used to reflect your participation. I
            will allow 4-5 questions after each presentation, so ensure that you
            are participating and asking questions a few times each week. For
            more specific details about presentation requirements, take a look
            at the presentation file on LMS.
          </div>
        </div>
        <h5>Documentary Project</h5>
        <div>
          Each student will be required to make a short 8-12 minute documentary.
          Class time will be allotted for this project. During the second half
          of the course, 15 minutes each day will be granted for project work.
        </div>
      </div>
    </Container>
  );
};

export default ClassInfo;
