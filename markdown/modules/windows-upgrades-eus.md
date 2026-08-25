{%- set _mod_docs_content_type = "CONCEPT" %}
# Windows Machine Config Operator Control Plane Only update {id="wmco-upgrades-eus_{{ context }}"}

You can use the **Control Plane Only** process to update the {{ product_title }} from one EUS version to another EUS version of {{ product_title }}. After you update the cluster, the Windows nodes are updated the new EUS version.  {._abstract}

During the update, the Windows workloads are kept in a healthy state with no disruptions.


:::important

This update was previously known as an **EUS-to-EUS** update and is now referred to as a **Control Plane Only** update. These updates are only viable between **even-numbered minor versions** of {{ product_title }}.

:::