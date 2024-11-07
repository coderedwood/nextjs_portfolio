"use client";
import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent'

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class ProjectsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.3;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '01',
        projectName: 'Old Harbour News',
        projectDesc: 'Administer platform updates, modifications and troubleshoot issues with a local news website.',
        projectType: 'Content Management System',
        roles: ['Web Admin', 'Tech Support'],
      },
      {
        number: '02',
        projectName: 'Dr. Kurt Waul Foundation',
        projectDesc: "Built, confgured and deployed early version of a website for a non-profit organization.",
        projectType: 'Content Management System',
        roles: ['Web Admin', 'Tech Support'],
      },
      {
        number: '03',
        projectName: 'Urged Services',
        projectDesc: 'Collaborated on the development of a delivery website for food and other products.',
        projectType: 'Fullstack Development',
        roles: ['Co-Developer',],
      },
      {
        number: '04',
        projectName: 'Portfolio Website',
        projectDesc: 'Web portfolio to show skillsets and display public portfolio.',
        projectType: 'Website Development',
        roles: ['Frontend Developer', 'Site Designer'],
      }
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState(
      {
        vh: Math.round(
          (window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default ProjectsSection;
