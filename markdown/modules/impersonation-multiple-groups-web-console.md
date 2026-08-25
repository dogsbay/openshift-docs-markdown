{%- set _mod_docs_content_type = "PROCEDURE" %}
# Impersonating a user with multiple group memberships in the web console {id="impersonating-user-multiple-group-memberships-web-console"}

You can start user impersonation from multiple locations in the {{ product_title }} Console. Depending on where you start, you can impersonate a single user, a single group, or a user with one or more group memberships. {._abstract}

**Prerequisites**

*   You must be logged in to the {{ product_title }} web console as a user with permission to impersonate other users.
*   The user or group that you want to impersonate must already exist.


:::note

The impersonated user can belong to zero or more groups.

:::


**Procedure**

1.  From the ***Overview*** page in the {{ product_title }} console, click your user name and select ***Impersonate User***.
1.  In the ***Username*** field in the ***Impersonate*** dialog, enter the name of the user you want to impersonate.
1.  Optional: In the ***Groups*** field, choose one or more groups that are associated with the user.

    The dialog displays a warning message explaining that impersonation applies the effective permissions of the specified user and any selected groups.
1.  Click ***Impersonate*** to impersonate your selected user, groups, or both.


:::note

Selecting one group uses the existing single-group impersonation behavior. Selecting no groups uses regular single-user impersonation.

:::