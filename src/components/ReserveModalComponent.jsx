import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ReserveModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.toggle();
        this.props.reserveItem(
            this.props.item.id,
            this.props.userInfo.name,
            this.props.userInfo.email,
            this.props.userInfo.tel
        );
    }

    render() {
        return (
            <div>
                <Button block color="primary" className="item-button" onClick={this.toggle}>
                    Reserve
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Reserve Item</ModalHeader>
                    <ModalBody>
                        You are about to reserve the item "{this.props.item.name}" from {this.props.item.seller.name}.<br />
                        Are you sure?
                        <br /> <br />
                        You will be able to see the seller's contact information and continue with this deal under the "
                        <span className="fa fa-exchange fa-lg fa-fw" /> Ongoing" section in the sidebar.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onSubmit}>
                            Confirm
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ReserveModal;
