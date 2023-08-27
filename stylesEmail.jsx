
    import * as React from 'react';
    import { Html, Head, Body, Section, Column, Text } from '@react-email/components';
    import Attributes from './Attributes.jsx';
import Class from './Class.jsx';
import Style from './Style.jsx';


    export function StylesemailEmail (props) {

      return (
        < Html >< Head >< Attributes >< Class  />< /Attributes>< Style >.blue-text div {
        color: blue !important;
      }</Style>< Style >.red-text div {
        color: red !important;
        text-decoration: underline !important;
      }</Style>< /Head>< Body >< Section >< Column >< Text  attributes= {{"cssClass":"red-text"} } >I'm red and underlined</Text>< Text  attributes= {{"cssClass":"blue-text"} } >I'm blue because of inline</Text>< Text  attributes= {{"mjClass":"mjclass"} } >I'm green</Text>< /Column>< /Section>< /Body>< /Html>
          );
    }

    export default StylesemailEmail; 
    