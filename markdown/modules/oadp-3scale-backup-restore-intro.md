{%- set _mod_docs_content_type = "CONCEPT" %}
# About backing up and restoring 3scale API Management {id="oadp-3scale-backup-restore-intro_{{ context }}"}

Back up and restore Red&#160;Hat 3scale API Management deployments by using {{ oadp_first }} to protect application resources, persistent volumes, and configurations. This helps you to safeguard your 3scale components for disaster recovery. {._abstract}

You can deploy 3scale components on-premise, in the cloud, as a managed service, or in any combination based on your requirements.

With {{ oadp_first }}, you can safeguard 3scale API Management deployments by backing up application resources, persistent volumes, and configurations.


:::note

You can use the {{ oadp_first }} Operator to back up and restore your 3scale API Management on-cluster storage databases without affecting your running services.

:::


You can configure {{ oadp_short }} to perform the following operations with 3scale API Management:

*   Create a backup of 3scale components
*   Restore the components to scale up the 3scale operator and deployment