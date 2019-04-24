import React from 'react'
import { Text as TextElement, TextInputProperties } from 'react-native'

type ChildrenType = JSX.Element | string | undefined;

const Text = ({
  children, 
  ...props
}: (
  {children: Array<ChildrenType> | ChildrenType} &
  TextInputProperties
)): JSX.Element => <TextElement {...props}>{children}</TextElement>

export default Text