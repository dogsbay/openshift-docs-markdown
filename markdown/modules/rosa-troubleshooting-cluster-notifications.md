{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting cluster notifications {id="rosa-troubleshooting-cluster-notifications_{{ context }}"}

If you are not receiving cluster notification emails, troubleshoot the issue by checking email filters, verifying notification contacts, and confirming network access. {._abstract}

**Procedure**

1.  Ensure that emails sent from `@redhat.com` addresses are not filtered out of your email inbox.
1.  Ensure that your correct email address is listed as a notification contact for the cluster.
1.  If you are not listed as a notification contact, ask the cluster owner or administrator to add you as a notification contact.
1.  If your cluster does not receive notifications, ensure that your cluster can access resources at `api.openshift.com`.