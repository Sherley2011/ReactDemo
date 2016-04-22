import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DocumentTitle from 'react-document-title'
import ShareContent from '../components/share/ShareContent'
import {requestSharePhotoInfo} from '../actions/share'

class SharePhotoComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    upLoadAfter(files){
      alert(files)
    }
    componentDidMount() {
        this.props.requestSharePhotoInfo()
    }

    render() {
        const shareHeaderProps = {
            username: this.props.user.get('name'),
            datetime: new Date(this.props.photo.get('datetime')),
            locale: this.props.photo.get('address'),
            userAvatar: this.props.user.get('avatar')
        }
        const shareContentProps = {
            datetime: new Date(this.props.photo.get('datetime')),
            title: this.props.photo.get('title'),
            description: this.props.photo.get('description'),
            img: this.props.photo.get('url')
        }

        return (
            <DocumentTitle title="分享">
                <div className="share">


              <ShareContent {...shareContentProps}></ShareContent>




                </div>
            </DocumentTitle>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.getIn(['share', 'user']),
        photo: state.getIn(['share', 'photo'])
    }
}

function mapDispatchToProps(dispatch) {
    return {
        requestSharePhotoInfo: bindActionCreators(requestSharePhotoInfo, dispatch)
    }
}

export const SharePhotoContainer = connect(mapStateToProps, mapDispatchToProps)(SharePhotoComponent)
