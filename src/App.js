import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'; // Import Custom CSS file

const App = () => {
  const mockPosts = [
    {
      id: 1,
      title: "Opinion: Automotive advertising - fact or fiction?",
      content: `The year has started on a good note when it comes to upholding consumer rights. Mid-January, the NCDRC (National Consumer Disputes Redressal Commission) ordered the country’s leading carmaker to compensate a consumer for providing misleading information about the fuel efficiency of the car he bought 20 years ago. Though the penalty amount is paltry, the event itself is hugely significant in the evolving power of consumer rights.

      Given the hyper-competitive landscape, it is easy for the consumer to be subjected to falsification of information. The latest WEF Global Risks report says that the biggest risk for the world for the next two years is the joint beast of misinformation and disinformation. For the marketer, it is unconsciously easy to slide from stating the truth to concocting the truth. I use the word unconsciously as there come times when we ourselves lose the ability to sift fact from myth and start believing in the latter.
      
      What may seem harmless as a piece of information can both harm the consumer as well as backfire on the marketer. The sheer urge to spice up data and performance specifications always lurks in the shadows. The pressures of the marketplace seem to take the better of our conscience. And this is not the first time that an automaker has resorted to the falsification of reports and data. Enough “gates” have been laid open since the automobile was invented, just that we know more now as we probe more now. 
      
      I cannot claim myself to be bathed in milk on this front. As a marketer, I, too, have explored loopholes and confusing nomenclature to create ‘winning’ communication for the products I worked on. As a team member, I have looked away from network partners deliberately misrepresenting facts to promote our products. Luckily, I worked in times when activism and probity were in their nascent stages in our country. 
      
      Both are massive firewalls now. Some of the world’s biggest brands have been singed due to deliberate misdemeanours. Every piece of communication, be it advertising, a social media post, a promotional banner, a specification sheet or even a newspaper insert is under full scrutiny now, not only by competition but also by activists, regulators and the consumers themselves. In our days, if a wrong piece of advertising went out, it was only advised to be withdrawn, having already done its damage.
      
      Today, there will be mayhem on all social media platforms. Leave aside the court’s ruling against you, the consumer backlash will be a nightmare to manage. This ruling is a landmark one and will have massive repercussions on the entire automobile marketing fraternity. The penalties will be minor but the damage to the brand will be massive. As you read this, all competition brands would have shared this judgment with all their network partners and customer bases. Hope the business leaders see this as the norm and not just an exception.`,
      publish_date: "2022-01-01"
    },

    {
      id: 2,
      title: "Opinion: India's new EV policy offers car brands a level playing field",
      content: `The Government of India has finally announced the much-awaited new electric vehicle policy, which was known in industry circles as the ‘Tesla policy’. In all fairness, it's a very well-balanced one, and one that may put India on the global EV manufacturing map yet again.

      This move may facilitate the likes of Tesla and VinFast to seed their brands in a highly competitive market, and it's also expected to invite billions of dollars of foreign direct investment (FDI) into the EV manufacturing space in the coming decade, which will be executed with a strong local auto parts ecosystem. What's more, it is not just new players who can avail of benefits from this policy but also existing players who plan to invest in EVs, thereby ensuring a level playing field.
      
      The development is likely to incentivise the likes of Foxconn and MG Motor (through JSW), besides Tesla and VinFast, to bring in global models quickly into the Indian market, at an attractive price. It could even attract mainstream players like Ford and Volkswagen to invest in the Indian electric vehicle market.
      
      In India, global vehicle makers see an economy that is poised to be the fastest growing among large economies, with a growing per capita and large consumer base, with sub-optimal cars per capita. Add to that its low manufacturing cost base, mature automotive component ecosystem, and now, favourable manufacturing policies, and the country has all the right ingredients to be a competitive manufacturing base to cater to global markets.
      
      Surely, almost every multinational company is likely to use India as an export base for EVs. With EVs expected to account for 15-20 percent of the market by the end of the decade, it will be large export volumes that will drive the viability of local EV manufacturing.
      
      Market leader Maruti Suzuki has announced, even before launching its first EV in India – the eVX – that it will be exporting its made-in-India EVs to Europe and Japan. Suzuki’s rival Honda Cars India is also developing the Asian Compact Electric Vehicle platform that will serve global markets. The likes of Hyundai, Kia, Toyota, Stellantis and Volkswagen have EVs on their radar that they plan to ship globally.
      
      A level playing field
      The scheme that lowers import tax, which was earlier opposed by multiple domestic vehicle manufacturers, appears to be fair, given the higher price threshold of USD 35,000 (around Rs 30 lakh), and the quantum of vehicles being capped at 8,000 units per annum. Tata Motors and Mahindra & Mahindra – the early movers in the EV space – are already being shortlisted to gain from the Government of India’s production-linked incentive scheme – a 13-18 percent benefit will allow the homegrown carmakers to offer close to half a dozen alternatives between them within the next three years.
      
      The move is set to galvanise the Indian electric vehicle ecosystem and spoil consumers with the best of both worlds. They will not only get to choose a zero-emissions personal mobility vehicle from Tesla and VinFast but also compel legacy players like Tata, Mahindra, Maruti, and Hyundai to offer a competitive model with a highly localised solution.`,
      publish_date: "2022-01-02"
    },


    {
      id: 3,
      title: "Opinion: Highway speed limits need rethinking",
      content: `I write this column as someone who has evolved into a very sedate driver over the years. Don’t get me wrong, I have my fun on bikes in the right environment, but I find much more joy in driving to a destination as efficiently as possible rather than as fast as possible. I suppose it also helps that my personal car is a twenty-year-old Maruti Zen. It’s a car whose ability to transport you to a simpler time is something I adore, and it also doesn’t feel very comfortable above 100kph. 

      With that foundation laid in place, let’s get to the point of this column. Some of our speed limits are ridiculous to the point of being downright dangerous. A prime example would be what’s happening on the Mumbai-Pune Expressway. A few years ago, the speed limit was raised from 80kph to 100kph and I think that number nicely balances the capability of our modern cars along with the driving skills of the average Indian road user.
      
      However, this speed limit only applies to the straight stretches and the problem begins when you get to the ghat section between Khopoli and Lonavala. Here, the speed limit is immediately halved to 50kph, which is simply way too slow for a road that remains a very wide and flowing six-lane expressway throughout. 
      
      How do we know that this is far too slow? Well, the authorities have now erected plenty of new overhead gantries with speed cameras, and I’ve noticed that almost nobody – not even most commercial vehicles – are going that slowly, especially downhill. People either drive past with oblivion or suddenly and dangerously brake to avoid the fine.
      
      Things get even worse when you’re on the elevated section over Lonavala where there’s a 30kph speed limit board that is soon followed by a row of new cameras. To put it into context how absurd this is on a six-lane ‘expressway’, an above-average athlete can run faster than that. 
      
      Having recently been stung by a Rs 2,000 fine for doing a very sedate 64kph on the expressway ghat, I tried slowing down to 30kph for this board and had to completely get off the road to do so without possibly causing a pile-up.
      
      I really wonder how this hasn’t already been corrected. Do the authorities who set these speeds actually drive on these roads? Or have all these new speed cameras been intentionally placed right next to unrealistic speed limit boards? Either way, something has to change.
      
      For bikes, things get worse, with painfully low speed limits on many state and national highways, and a growing number of strategically parked speed interceptor vehicles waiting to catch you out.
      
      Speed limits are important and the steep fines associated with them do a good job of keeping reckless driving under control. But at the same time, more thought and science needs to go into the design of these limits, especially when tens of thousands of crores of taxpayer money is being put into road infrastructure development. 
      
      The very point of making great roads is to facilitate more efficient traffic movement, which will lead to a more efficient economy. Doesn’t it completely defeat the purpose if we are going to then artificially slow the traffic down again?`,
      publish_date: "2022-01-03"
    },

    {
      id: 4,
      title: "Opinion: Cold brakes; beware",
      content: `Cold brakes don’t work quite as well as warmed-up ones. Lesson number one for me took place back in the day when Hyundai’s Sonata had a torquey V6 under the hood. Early one morning, just out of the gate, one lusty pull of the growling V6 later, I stood on the brakes... only to sail right past the U-turn. Luckily, no one was around. Cold discs, cold calipers, cold pads, and probably cold tyres meant braking performance was suboptimal. 

      Then it happened again, more recently, and this time after I’d driven a few kilometres. I was doing a brake test for the camera on a quiet private road, but again, though I hit the brakes hard, I sailed right past where I thought I would stop. Cold brakes again. But how? Needless to say, the next stop was much better, with the brakes now warmed up, but what was the problem? Then it hit me; the vehicle in question was a strong hybrid. Aha! 
      
      Confused? So was I initially. But think about it like I did later, and some astonishing details emerge. The problem, of course, is regeneration. Electric cars and strong hybrids, which run primarily on electric boost, slow down using what’s called regeneration. So instead of using the friction brakes or discs to slow down, these cars are ‘braked’ by using their electric motor. Flipped around from ‘motor’ to ‘generator’ mode, when your foot is placed on the brake pedal, the electric motor/generator both slows the car down and collects electrical energy; at the same time. 
      
      Similar in principle (but not the same) to pull-back toy cars, the heavy use of regeneration means the disc and drums seldom get used. Yes, they are blended in eventually, before you come to a complete stop at say two or three kph, but unless you really brake hard, the braking is primarily done by regeneration and the motor/generator. More regen, after all, means more range and greater efficiency. 
      
      So just how much braking is done using regen and how often do strong hybrids and electric cars use their friction brakes? Get this; Porsche says its Taycan EV uses regenerative braking 90 percent of the time. 90 percent! Other carmakers’ figures hover between 80 and 85 percent, and that’s even for single-motor cars. This, of course, means the friction brakes have a real easy life and are often cold during even regular driving. Stone cold, if, like me, you’ve only driven a kilometre or so and not really put your foot firmly on the brake.  
      
      What’s worse is that the heavy use of regenerative braking allows carmakers to reduce the size of their brakes, allowing them to make these now not-so-often-used components significantly smaller and lighter. Also, with a view to improving vehicle efficiency, new-generation calipers retract their brake pads completely after each braking manoeuvre. This also allows for a greater air gap between the pad and the disc. Remember that the next time you head out on cold brakes, especially if you are driving your strong hybrid or EV.`,
      publish_date: "2022-01-04"
    },



    {
      id: 7,
      title: "Opinion: Looking back to go forward ",
      content: `Two of our mega stories this month – Maruti’s plan to launch range extenders or series hybrids and the Atal Setu – triggered an interesting thought in my mind, which I wanted to share with you. Both seem like a step back in time, enabling a leap into the future. Let me explain. The Atal Setu is an engineering marvel and is all set to ease up our immediate commuting future, but it’s also something from the past.

      The world over, cities are now moving away from mega roads, seeing that they eventually only attract more traffic. As that cynical statement goes, ‘one more lane will fix it’, adding lanes eventually doesn’t really ease traffic. The world over, cities have realised that expanding their roads hasn’t helped ease congestion and cities are now shifting their focus to public transport and beyond – re-zoning and restructuring to enable shorter, quicker commutes.

      London has its congestion charge, New York too will implement the same in what is being called a car-reduction experiment. It wants to reduce city centre traffic by 20 percent and use funds to upgrade its old and stretched-to-the-limit subway system. Many European cities are re-zoning areas and even redoing city layouts for easier and shorter commutes. The Line in Saudi Arabia takes things further still and proposes an audacious plan to build an entire city with no roads, but with a structure allowing for short walkable commutes to work, play and shop, and a high-speed rail system for the odd longer distances.

      So should we not be building these roads then? No, we certainly need them. Like a snowball, our infrastructure development began small and a while ago, but it’s now growing into the mega size we need. But the future remains a shorter-commute one and one that we must keep working towards. This isn’t the end goal.

      The same goes with hybrids too. While the world seems done with them – certainly at least the series hybrids that Maruti wants to build – for us there’s merit. EVs will play a big part in our future but we have many hurdles to overcome: charging infra, green energy availability and even electricity availability all around the country. So, as it stands, we have some distance to go and until then, solutions are needed for a growing automobile market. Thus, while the series hybrid maybe shunned the world over, for India, this could be a fantastic idea. Imagine a Swift returning a genuine 30-plus kpl.

      So yes, I wanted to pen this thought down as it struck me as intriguing, seeing that we are looking to past ideas to build our future. Perhaps they are not past ideas then, maybe just hoops we must get through on our way to the future.`,
      publish_date: "2022-01-07"
    }
  ];

  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<BlogPostList posts={mockPosts} />} />
            <Route path="/post/:postId" element={<Post />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
