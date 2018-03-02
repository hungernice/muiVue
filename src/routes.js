import Nav1 from './components/nav1/Nav1.vue'
import Reports from './components/nav1/Reports.vue'
import Analytics from './components/nav1/Analytics.vue'
import Again from './components/nav2/Again.vue'
import Another from './components/nav2/Another.vue'
import More from './components/nav2/More.vue'
import T1 from './components/nav2/T1.vue'
import T2 from './components/nav2/T2.vue'
import T3 from './components/nav2/T3.vue'
import Nav3 from './components/nav3/Nav3.vue'
import About from './components/nav3/About.vue'
import Connect from './components/nav3/Connect.vue'

export default {
	mode: 'history',
	routes:[
		{
			path: "/",
			redirect: '/nav1'
		},
		{
			path: '/nav1',
			component: Nav1
		},
		{
			path: '/reports',
			component: Reports
		},
		{
			path:'/analytics',
			component: Analytics
		},
		{
			path: "/nav2/t1",
			component: T1
		},
		{
			path: "/nav2/t2",
			component: T2
		},
		{
			path: "/nav2/t3",
			component: T3
		},
		{
			path:"/again",
			component: Again
		},
		{
			path:"/more",
			component: More
		},
		{
			path:"/another",
			component: Another
		},
		{
			path: "/nav3",
			component: Nav3
		},
		{
			path: "/about",
			component: About
		},
		{
			path: "/connect",
			component: Connect
		},
	]
}
