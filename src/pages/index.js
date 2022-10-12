import Home from "./Home";
import Profile from "./Profile";
import Detail from "./Detail";
import NoResult from "./NoResult";
import ExploreCollection from "./ExploreCollection";
import CollectionStat from "./CollectionStat";
import Aggregator from "./Aggregator";
import NFTGeneratorMain from "./NFTGeneratorMain";


const routes = [
  { path: '/', component: <Home />},
  { path: '/profile', component: <Profile />},
  { path: '/detail', component: <Detail />},
  { path: '/no-result', component: <NoResult />},
  { path: '/explorecollection', component: <ExploreCollection />},
  { path: '/collectionstat', component:<CollectionStat/>},
  { path: '/aggregator', component:<Aggregator/>},
  { path: '/nftgenerator', component:<NFTGeneratorMain/>},
]

export default routes;
