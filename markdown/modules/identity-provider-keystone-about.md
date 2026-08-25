{%- set _mod_docs_content_type = "CONCEPT" %}
# About Keystone authentication {id="identity-provider-keystone-about_{{ context }}"}

Configure Keystone authentication in {{ product_title }} to share sign-in with your OpenStack Keystone server. Mapping users by Keystone ID reduces access risk when usernames are reused. {._abstract}

Map {{ product_title }} users to Keystone usernames or unique Keystone IDs. Users log in with their Keystone username and password.

Basing users on the Keystone ID is gives each user a unique identity. If you delete a Keystone user, then create a new user with the same username but a different Keystone ID, the new user does not have access to resources of the deleted user.