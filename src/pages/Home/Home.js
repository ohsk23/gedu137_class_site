import React from 'react';
import {Button, Container} from 'react-bootstrap';
import ReactPlayer from 'react-player';

const podcastData = [
  {
    title:
      'Science explains when to visit the hospital/answer emails/deliver bad news',
    date: '27 Jul, Tuesday',
    link:
      'https://www.cbc.ca/listen/live-radio/1-51-quirks-and-quarks/clip/15462601-science-explains-when-to-visit-the-hospital-answer-emails-and-deliver-bad-news',
    time: '13 min',
  },
  {
    title: 'How to Be Happy',
    date: '28 Jul, Wednesday',
    link: 'https://freakonomics.com/podcast/how-to-be-happy_radio/',
    time: 'Listen from 35:40-End',
  },
  {
    title: 'Digging Deep into The Beluga’s Belly',
    date: '29 Jul, Thursday',
    link: 'https://www.cbc.ca/player/play/1320664131982',
    time: '12:54 min',
  },
  {
    title: 'Food and Mood- How eating affects your mental health',
    date: '30 Jul, Friday',
    link:
      'https://player.fm/series/the-food-programme/food-and-mood-how-eating-affects-your-mental-health',
    time: 'Listen from the start to 13:00 min',
  },
  {
    title: 'High Performance Athletes/High Performance Brains',
    date: '3 Aug, Monday',
    link:
      'https://www.cbc.ca/radio/quirks/may-26-2018-cheating-on-the-ozone-treaty-nano-nutrients-for-crops-why-birds-almost-died-out-1.4675194/great-athletes-have-high-performance-brains-as-well-as-bodies-1.4675213',
    time: '16 min',
  },
  {
    title: 'Why does it feel so good to be scared?',
    date: '4 Aug, Tuesday',
    link:
      'https://player.fm/series/brainstuff-2139227/why-does-it-feel-so-good-to-be-scared',
    time: '8 min',
  },
  {
    title: 'Psychology of Motivation and Procrastination',
    date: '5 Aug, Wednesday',
    link:
      'https://player.fm/series/all-in-the-mind-1301227/the-psychology-of-motivation-and-procrastination',
    time: '0 - 13:44( you are not required to listen beyond that time)',
  },
  {
    title: 'Travel: How to plan your Trip to Europe',
    date: '6 Aug, Thursday',
    link:
      'https://player.fm/series/indie-travel-podcast-enhanced/how-to-plan-your-europe-trip-podcast',
    time: '3:52 - 15:08',
  },
  {
    title: 'Are Cities Overrated?',
    date: '7 Aug, Friday',
    link:
      'https://www.npr.org/2019/06/14/732847076/episode-919-are-cities-overrated',
    time: '13 min (listen from minute 3 to 16)',
  },
  {
    title: 'The Exclamation Point',
    type: 'video',
    date: '10 Aug, Monday',
    link:
      'https://lmsvod.postech.ac.kr/vod/20200915015743450157441/MULC_200807120931c32413d5.mp4',
  },
];

const PodcastPanel = ({title, time, date, link, type}) => {
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
        {time && <div>{`Podcast Length: ${time}.`}</div>}
        {type === 'video' && (
          <ReactPlayer
            width="100%"
            height="auto"
            style={{paddingTop: 15}}
            url="https://lmsvod.postech.ac.kr/vod/20200915015743450157441/MULC_200807120931c32413d5.mp4"
            controls={true}
          />
        )}
      </div>
      {type !== 'video' && (
        <Button style={{alignSelf: 'center'}} href={link}>
          Go to Podcast
        </Button>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <Container style={{textAlign: 'start', paddingTop: 40, paddingBottom: 40}}>
      {podcastData.map(({title, date, link, time, type}, index) => {
        return (
          <>
            {index === 0 && (
              <h4 style={{paddingBottom: 20, paddingTop: 20}}>
                {`Podcast Schedule Week 1`}
              </h4>
            )}
            {index % 5 === 4 && (
              <h4 style={{paddingBottom: 20, paddingTop: 20}}>
                {`Podcast Schedule Week ${Math.floor(index / 5 + 2)}`}
              </h4>
            )}
            <PodcastPanel
              title={title}
              date={date}
              link={link}
              time={time}
              type={type}
            />
          </>
        );
      })}
      {/* 
      <ReactPlayer
        url="https://lmsvod.postech.ac.kr/vod/20200915015743450157441/MULC_200807120814c32413d4.mp4"
        controls={true}
      /> */}
    </Container>
  );
};

export default Home;
