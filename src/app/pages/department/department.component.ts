import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

  component=[
 {
  id:1,
  title:"Aerospace and Defence",
  Image:"https://www.celestica.com/uploadedImages/Site/our-expertise/markets/aerospace-and-defense-b/specialized-exptertise-list/defense-air660x345.jpg",
  Description:"The aerospace and defense industry is a massive sector encompassing everything that flies, from commercial airplanes to military jets and spacecraft. It involves research, design, manufacturing, and maintenance of these complex vehicles.It focuses on new technologies that improve the safety and security of aircraft and spacecraft for both commercial and military use."
},
{
  id:2,
  title:"Banking and Finance",
  Image:"https://iscjobs.com/wp-content/uploads/2019/11/ISC-new-Finance-page-picture-1-e1574360213974.jpg ",
  Description:"The banking and finance industry is the lifeblood of the economy, channeling money from savers to borrowers and fueling investment.It encompasses traditional banks that handle everyday transactions to investment firms that manage complex financial instruments.This vast sector offers a diverse range of careers, from retail banking serving local communities to complex financial analysis on a global scale.",
},
{
  id:3,
  title:"Healthcare",
  Image:"https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg",
  Description:"Healthcare software development is vital for modern healthcare systems. With advancing technology, providers rely on software solutions to streamline operations, improve patient care, and boost outcomes. NeST Digital offers a range of healthcare software solutions, from patient monitoring to virtual reality simulations for medical training. These solutions enhance communication, provide real-time patient information, and increase engagement."
       ,
},
{
  id:4,
  title:"Insurance",
  Image:"https://cdn-res.keymedia.com/cdn-cgi/image/w=840,h=504,f=auto/https://cdn-res.keymedia.com/cms/images/us/003/0308_638048052477122640.jpg",
  Description:"The insurance industry acts as a financial safety net, offering protection against unforeseen events. Companies pool risk from many individuals, allowing policyholders to pay smaller premiums in exchange for potential payouts in case of accidents, illness, or property damage. This financial buffer helps individuals and businesses weather financial storms and plan for the future.",
},
{
  id:5,
  title:"Locomotive",
  Image:"https://ca-times.brightspotcdn.com/dims4/default/5709f0b/2147483647/strip/true/crop/5333x3000+0+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8b%2F01%2F673eb7884a9cb0bedaea246afa16%2Fcahsr-train-view-02-day-v2.png",
  Description:"At NeST Digital, we are committed to delivering high-quality solutions that drive innovation in the locomotive sector.Our competencies in infotainment and displays, rolling stock body control units, and rolling stock power electronics enable us to meet the evolving needs of the industry, providing our clients with state-of-the-art technologies that elevate their locomotive systems to new heights.",
},
{
  id:6,
  title:"Industrial",
  Image:"https://assets.weforum.org/article/image/KwvRfX8RsCkrYqNz9j_1K3taMNrvyIZbHJ1YSqPmHzc.jpg",
  Description:"Our knowledge of plant/equipment operational challenges (including OT and IT layer) and expertise in digital technologies is a unique combination, helping us to be a the most valued partner to our customers. We operate in Hi-Tech Factory Automation, Building Automation, Power & Smart Grid, O&G, Water and Equipment & Tools sub-verticals.",
},
{
  id:7,
  title:"Mobility",
  Image:"https://assets.ey.com/content/dam/ey-sites/ey-com/en_be/topics/automotive-and-transportation/ey-building-the-future-of-mobility-today-new.jpg.rendition.450.300.jpg",
  Description:"Providing better solutions for overcoming the challenges of the technology curve, competition and increasing customer expectations.Capitalizing on the prowess of electronics to upgrade various systems used in vehicles to communicate, monitor, control, navigate and entertain.",
},
{
  id:8,
  title:"GIS",
  Image:"https://t4.ftcdn.net/jpg/06/55/29/49/360_F_655294964_M1URDBaNmeGHnFkFevrUCOqQjjN7yeaK.jpg",
  Description:"NeST GIS is a products and services entity under NeST Digital Technologies, offering advanced geospatial solutions with a focus on government, cadastral, utilities, transportation and facilities management.One of the NeST’s key differentiators in the industry is that it is a software development company that has added GIS as a horizontal technology focus area, rather than a ‘mapping’ company attempting software development in GIS. We help to GIS‐enable the business processes of our clients.",
},


]

}
