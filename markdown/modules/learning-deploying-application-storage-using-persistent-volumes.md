{%- set _mod_docs_content_type = "REFERENCE" %}
# Using persistent volumes {id="learning-deploying-application-storage-using-persistent-volumes_{{ context }}"}

Test your cluster’s persistent volume by creating a file, storing it, then purposefully causing a pod failure. Confirming that the file still exists after the pod is re-created demonstrates how your data is protected during unexpected outages.