import React from 'react';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from 'react-avatar';
import Typography from '@material-ui/core/Typography';
import { Col, Row } from 'reactstrap';

var divStyle = {
    background: 'white',
    padding: '0px',
    margin: '0px'
};

function RenderListItem({ item }) {
    const reserved = item.reserved.isReserved ? `Reserved by ${item.reserved.name}` : 'Not Reserved';
    const phone = item.reserved.isReserved ? (
        <Button href={`tel:${item.reserved.tel}`}>
            <span className="fa fa-phone fa-fw" /> {item.reserved.tel}
        </Button>
    ) : (
        <div />
    );
    const email = item.reserved.isReserved ? (
        <Button href={`mailto:${item.reserved.email}`} style={{'text-transform': 'none'}}>
            <span className="fa fa-envelope-o fa-fw" /> {item.reserved.email}
        </Button>
    ) : (
        <div />
    );
    var time = item.time;
    time = time.slice(0, 10);
    return (
        <ListItem alignItems="flex-start" style={{ height: 200 }}>
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item.picture} size="150" />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Typography component="span" color="textPrimary" variant="display1">
                        {item.name}
                    </Typography>
                }
                secondary={
                    <React.Fragment>
                        <Typography component="span" color="textPrimary" variant="subtitle1">
                            <Row>
                                <Col xs={4}>{reserved}</Col>
                                <Col xs={{ size: 3, offset: 1 }}>{phone}</Col>
                                <Col xs={{ size: 3 }}>{email}</Col>
                            </Row>
                        </Typography>
                        <Typography component="span" color="textPrimary" variant="body2">
                            {time}
                        </Typography>
                        <Typography component="span" color="textPrimary" variant="body2">
                            Price: ${item.price}
                        </Typography>
                        Description: {item.detail}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}

function PostList(props) {
    if (!props.isLoggedIn) {
        return (
            <div className="container start-of-home">
                <div className="col-12">
                    <h3>Please Login First</h3>
                    <hr />
                </div>
            </div>
        );
    }
    var arr = [];
    for (var key in props.posts) {
        if (props.posts.hasOwnProperty(key)) {
            arr.push(props.posts[key]);
        }
    }
    const filterCriterion =
        props.renderOngoing === true
            ? (item) => item.reserved.isReserved && arr.indexOf(item.id) >= 0
            : (item) => arr.indexOf(item.id) >= 0;
    const sellItems = props.sellItems.filter(filterCriterion).map((item) => {
        return (
            <div key={item.id} className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderListItem item={item} />
                </div>
            </div>
        );
    });

    const title = props.renderOngoing === true ? 'My Ongoing Posts' : 'My Posts';

    return (
        <div className="container start-of-home">
            <div className="col-12">
                <h3>{title}</h3>
                <hr />
            </div>
            <div style={divStyle}>
                <List>{sellItems}</List>
            </div>
        </div>
    );
}

export default PostList;