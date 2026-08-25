{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the groups claim {id="configuring-the-groups-claim_{{ context }}"}

To manage users in Argo CD, you must configure a groups claim that can be included in the authentication token. 

**Procedure**

1.  In the Keycloak dashboard, navigate to **Client Scope** and add a new client with the following values:

Name
:   `groups`

Protocol
:   `openid-connect`

Display On Content Scope
:   `On`

Include to Token Scope
:   `On`

1.  Click **Save** and navigate to `groups` -> **Mappers**.
1.  Add a new token mapper with the following values:

Name
:   `groups`

Mapper Type
:   `Group Membership`

Token Claim Name
:   `groups`
    The token mapper adds the `groups` claim to the token when the client requests `groups`. 

1.  Navigate to **Clients** -> **Client Scopes** and configure the client to provide the groups scope. Select `groups` in the **Assigned Default Client Scopes** table and click **Add selected**. The `groups` scope must be in the **Available Client Scopes** table.
1.  Navigate to **Users** -> **Admin** -> **Groups** and create a group `ArgoCDAdmins`.