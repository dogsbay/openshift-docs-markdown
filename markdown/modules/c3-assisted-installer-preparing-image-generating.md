{%- set _mod_docs_content_type = "PROCEDURE" %}
# Generating the image in the {{ ai_full }} {id="c3-assisted-installer-preparing-image-generating_{{ context }}"}

Create a cluster and download the discovery ISO image. {._abstract}

**Procedure**

1.  Log in to [{{ ai_full }} web console](https://console.redhat.com/) with your credentials.
1.  In the **Red Hat OpenShift** tile, select **OpenShift**.
1.  In the **Red Hat {{ product_title }}** tile, select **Create Cluster**.
1.  On the **Cluster Type** page, scroll to the end of the **Cloud** tab, and select **Oracle Cloud Infrastructure (virtual machines)**.
1.  On the **Create an OpenShift Cluster** page, select the **Interactive** tile.
1.  On the **Cluster Details** page, complete the following fields:
    | Field | Action required |
    | --- | --- |
    | **Cluster name** | Specify the name of your {{ product_title }} cluster. This name is the same name you used to create the resource via the Terraform scripts. The name must be between 1-54 characters. It can use lowercase alphanumeric characters or hyphen (-), but must start and end with a lowercase letter or a number. |
    | **Base domain** | Specify the base domain of the cluster. This is the value used for the `zone_dns` variables in the Terraform scripts that run on {{ oci_edge }}. Make a note of the value. |
    | **OpenShift version** | Select **OpenShift 4.16.20**. If it is not immediately visible, scroll to the end of the dropdown menu, select **Show all available versions**, and type the version in the search box. |
    | **Integrate with external partner platforms** | Select **Oracle Cloud Infrastructure**.<br>After you specify this value, the **Include custom manifests** checkbox is selected by default and the **Custom manifests** page is added to the wizard. |
1.  Leave the default settings for the remaining fields, and click **Next**.
1.  On the **Operators** page, click **Next**.
1.  On the **Host Discovery** page, click **Add hosts** and complete the following steps:

    :::note

    The minimal ISO image is the mandatory **Provisioning type** for the {{ oci_edge_no_rt }}, and cannot be changed.
    
    :::

    1.  In the **SSH public key** field, add the SSH public key by copying the output of the following command:
        ```terminal
        $ cat ~/.ssh/id_rsa.put
        ```

        The SSH public key will be installed on all {{ product_title }} control plane and compute nodes.
    1.  Click the **Show proxy settings** checkbox.
    1.  Add the proxy variables from the `/etc/environment` file of the bastion server that you configured earlier:
        ```terminal
        http_proxy=http://www-proxy.<your_domain>.com:80
        https_proxy=http://www-proxy.<your_domain>.com:80
        no_proxy=localhost,127.0.0.1,1,2,3,4,5,6,7,8,9,0,.<your_domain>.com
        #(ie.oracle.com,.oraclecorp.com)
        ```
    1.  Click **Generate Discovery ISO** to generate the discovery ISO image file.
1.  Click **Download Discovery ISO** to save the file to your local system. After you download the ISO file, you can rename it as required, for example `discovery_image_<your_cluster_name>.iso`.