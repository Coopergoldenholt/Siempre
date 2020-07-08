import React, { useState } from "react";
import { Link } from "react-scroll";
import "../css/nav.css";
import { useTheme, makeStyles, IconButton } from "@material-ui/core";
import { Paper, Button, Drawer, Hidden } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import AirportShuttleRoundedIcon from "@material-ui/icons/AirportShuttleRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import MeetingRoomRoundedIcon from "@material-ui/icons/MeetingRoomRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";

const Header = (props) => {
	const [drawerState, setDrawerState] = useState({ right: false });

	// const theme = useTheme();
	const useStyles = makeStyles({
		paper: {
			height: "8vh",
			width: "100vw",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			fontFamily: "Muli, sans-serif",
			position: "sticky",
			top: "0",
			zIndex: "1000",
			paddingLeft: 10,
			backgroundColor: "#e8dae2",
			// paddingRight: 10
		},
		list: {
			width: 250,
		},
	});
	const classes = useStyles();

	const toggleDrawer = (side, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setDrawerState({ ...drawerState, [side]: open });
	};

	const sideList = (side) => (
		<div
			className={classes.list}
			style={{ height: "100%", backgroundColor: "#e8dae2" }}
			role="presentation"
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}
		>
			<List style={{ backgroundColor: "#e8dae2" }}>
				<Link smooth to="home">
					<ListItem
						button
						key={"home"}
						onClick={() => setDrawerState({ right: false })}
					>
						<ListItemIcon>
							<HomeRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
				</Link>

				<Link smooth to="about-us">
					<ListItem
						button
						key={"home"}
						onClick={() => setDrawerState({ right: false })}
					>
						<ListItemIcon>
							<InfoRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"About Us"} />
					</ListItem>
				</Link>

				<Link smooth to="virtual-tour">
					<ListItem
						button
						key={"home"}
						onClick={() => setDrawerState({ right: false })}
					>
						<ListItemIcon>
							<AirportShuttleRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Virtual Tour"} />
					</ListItem>
				</Link>
				<Link smooth to="vendors">
					<ListItem
						button
						key={"home"}
						onClick={() => setDrawerState({ right: false })}
					>
						<ListItemIcon>
							<AccountCircleRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Vendors"} />
					</ListItem>
				</Link>
				<Link smooth to="always-room">
					<ListItem
						button
						key={"home"}
						onClick={() => setDrawerState({ right: false })}
					>
						<ListItemIcon>
							<MeetingRoomRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Rooms"} />
					</ListItem>
				</Link>
				<Link smooth to="contact-form">
					<ListItem
						button
						key={"home"}
						onClick={() => setDrawerState({ right: false })}
					>
						<ListItemIcon>
							<MailRoundedIcon />
						</ListItemIcon>
						<ListItemText primary={"Contact Us"} />
					</ListItem>
				</Link>
			</List>
		</div>
	);

	return (
		<>
			<Paper className={classes.paper} id="header-paper" elevation="5">
				<Link smooth to="home">
					<div className="logo-space allura" button>
						Siempre
					</div>
				</Link>

				<div
					// className="header-explore"
					style={{ "justify-content": "flex-end", "margin-right": "10px" }}
				>
					<Hidden xsDown>
						<Link smooth to="about-us">
							<Button>About Us</Button>
						</Link>
						<Link smooth to="virtual-tour">
							<Button>Virtual Tour</Button>
						</Link>
						<Link smooth to="vendors">
							<Button>Vendors</Button>
						</Link>
						<Link smooth to="always-room">
							<Button>Rooms</Button>
						</Link>
						<Link smooth to="contact-form">
							<Button>Contact Us</Button>
						</Link>
					</Hidden>
				</div>

				<div className="hidden-small" style={{ "margin-right": "10px" }}>
					<IconButton onClick={toggleDrawer("right", true)}>
						<MenuRoundedIcon fontSize="large" />
					</IconButton>
				</div>
			</Paper>
			<div>
				<Drawer
					anchor="right"
					open={drawerState.right}
					onClose={toggleDrawer("right", false)}
				>
					{sideList("right")}
				</Drawer>
			</div>
		</>
	);
};

export default Header;
