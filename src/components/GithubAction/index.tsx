import React from 'react';
import { TextInput } from 'react-native-paper';

export const GithubAction = ({ observable, index, updateFieldWithValue }: any) => (
  <>
    <TextInput
      accessibilityLabel="owner"
      value={observable.owner}
      onChangeText={(value) =>
        updateFieldWithValue('owner', index, value)
      }
    />
    <TextInput
      label="repo"
      value={observable.repo}
      onChangeText={(value) => updateFieldWithValue('repo', index, value)}
    />
    <TextInput
      label="Workflow Name"
      value={observable.workflowId}
      onChangeText={(value) =>
        updateFieldWithValue('workflowId', index, value)
      }
    />
    <TextInput
      label="authorization Token"
      secureTextEntry={true}
      value={observable.authToken}
      onChangeText={(value) =>
        updateFieldWithValue('authToken', index, value)
      }
    />
  </>
);
