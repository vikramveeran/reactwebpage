import React from 'react'
import Card from './Card';
import  User  from './User';

const Index = () => {

  const jobOpenings = [
  {
    brandLogo: "https://th.bing.com/th/id/OIP.arezqGrVeKUAmuKTaXGGEgHaEK?w=320&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/635a95f7c27d130bd1c9d592_oPRfC3an70m5XzoiFkhSU95TTroHffn_G2PHxNfXIkXeK2js6idPoJ5tDstrP9GE3Kb3ec2WLmcDx-8JnVh88a69r91e1_zY9N3nBxElv0TMCE-fDC5ZQwwMzXPx2DcVX4yF5Ulyeg0lgam3b_U0rfnZwY5deyo1_lFU32uu0nqoM85JZpxNhFev.png",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 55,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 65,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Cloud Support Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 70,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "10 weeks ago",
    post: "Software Test Engineer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: 38,
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "6 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 58,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "2 months ago",
    post: "Product Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 68,
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "8 days ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Bangalore, India"
  }
];

  return(
    <div className='parent'>
       {jobOpenings.map(function(jobOpening){
         return <Card 
         brandLogo={jobOpening.brandLogo}
         companyName={jobOpening.companyName}
         datePosted={jobOpening.datePosted}
         post={jobOpening.post}
         tag1={jobOpening.tag1}
         tag2={jobOpening.tag2}
         pay={jobOpening.pay}
         location={jobOpening.location}
         />
       })}
      </div> 
  )
}
export default Index


