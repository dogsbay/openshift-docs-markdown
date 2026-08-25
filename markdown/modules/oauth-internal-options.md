{%- set _mod_docs_content_type = "CONCEPT" %}
# Options for the internal OAuth server {id="oauth-internal-options_{{ context }}"}

The internal OAuth server provides configuration options for token duration and grant strategies to control authentication behavior. {._abstract}

## OAuth token duration options {id="oauth-token-duration_{{ context }}"}

The internal OAuth server generates two kinds of tokens:

| Token | Description |
| --- | --- |
| Access tokens | Longer-lived tokens that grant access to the API. |
| Authorize codes | Short-lived tokens whose only use is to be exchanged for an access token. |

You can configure the default duration for both types of token. If necessary,
you can override the duration of the access token by using an `OAuthClient`
object definition.

## OAuth grant options {id="oauth-grant-options_{{ context }}"}

When the OAuth server receives token requests for a client to which the user
has not previously granted permission, the action that the OAuth server
takes is dependent on the OAuth client’s grant strategy.

The OAuth client requesting token must provide its own grant strategy.

You can apply the following default methods:

| Grant option | Description |
| --- | --- |
| `auto` | Auto-approve the grant and retry the request. |
| `prompt` | Prompt the user to approve or deny the grant. |