import React from 'react';
import {Button, Container} from 'react-bootstrap';

const podcastData = [
  {
    title:
      'Science explains when to visit the hospital/answer emails/deliver bad news',
    date: '27 Jan, Tuesday',
    link:
      'https://www.cbc.ca/listen/live-radio/1-51-quirks-and-quarks/clip/15462601-science-explains-when-to-visit-the-hospital-answer-emails-and-deliver-bad-news',
    time: '13 min',
  },
  {
    title: 'How to Be Happy',
    date: '28 Jan, Wednesday',
    link: 'https://freakonomics.com/podcast/how-to-be-happy_radio/',
    time: 'Listen from 35:40-End',
  },
  {
    title: 'Digging Deep into The Beluga’s Belly',
    date: '29 Jan, Thursday',
    link: 'https://www.cbc.ca/player/play/1320664131982',
    time: '12:54 min',
  },
  {
    title: 'Food and Mood- How eating affects your mental health',
    date: '30 Jan, Friday',
    link:
      'https://player.fm/series/the-food-programme/food-and-mood-how-eating-affects-your-mental-health',
    time: 'Listen from the start to 13:00 min',
  },
];

const PodcastPanel = ({title, time, date, link}) => {
  return (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        boxShadow: 5,
        textAlign: 'start',
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <div>
        <div style={{fontSize: 14, lineHeight: '16px'}}>{date}</div>
        <div style={{fontWeight: 600, fontSize: 22, overflow: 'hidden'}}>
          {title}
        </div>
        <div>{`Podcast Length: ${time}.`}</div>
      </div>
      <Button style={{alignSelf: 'center'}} href={link}>
        Go to Podcast
      </Button>
    </div>
  );
};

const Home = () => {
  return (
    <Container style={{textAlign: 'start', paddingTop: 40}}>
      <h4 style={{paddingBottom: 20}}>Podcast Schedule Week 1</h4>
      {podcastData.map(({title, date, link, time}) => {
        return (
          <PodcastPanel title={title} date={date} link={link} time={time} />
        );
      })}
    </Container>
  );
};

export default Home;
