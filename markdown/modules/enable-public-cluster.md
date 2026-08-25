{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure an existing private cluster to be public {id="enable-public-cluster_{{ context }}"}

Configure an existing private cluster to be public by allowing Application Programming Interface (API) endpoint access from the internet. This enables access to your cluster without requiring private connection configuration. {._abstract}

**Procedure**

1.  Log in to {{ cluster_manager_url }}.
1.  Select the private cluster you want to make public.
1.  On the **Networking** tab, deselect **Make API private** under **Control Plane API endpoint**.
1.  Click **Change settings**.

    :::note

    Transitioning your cluster between private and public can take several minutes to complete.
    
    :::