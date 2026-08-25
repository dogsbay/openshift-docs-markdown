{%- set _mod_docs_content_type = "PROCEDURE" %}
# Downloading the RHCOS cluster image {id="installation-nutanix-download-rhcos_{{ context }}"}

Prism Central requires access to the {{ op_system_first }} image to install the cluster. You can use the installation program to locate and download the {{ op_system }} image and make it available through an internal HTTP server or Nutanix Objects. {._abstract}

**Prerequisites**

*   Obtain the {{ product_title }} installation program and the pull secret for your cluster. For a restricted network installation, these files are on your mirror host.

**Procedure**

1.  Change to the directory that contains the installation program and run the following command:
    ```terminal
    $ ./openshift-install coreos print-stream-json
    ```
1.  Use the output of the command to find the location of the Nutanix image, and click the link to download it.
    ```terminal title="Example output"
    "nutanix": {
      "release": "411.86.202210041459-0",
      "formats": {
        "qcow2": {
          "disk": {
            "location": "https://rhcos.mirror.openshift.com/art/storage/releases/rhcos-4.11/411.86.202210041459-0/x86_64/rhcos-411.86.202210041459-0-nutanix.x86_64.qcow2",
            "sha256": "42e227cac6f11ac37ee8a2f9528bb3665146566890577fd55f9b950949e5a54b"
    ```
1.  Make the image available through an internal HTTP server or Nutanix Objects.
1.  Note the location of the downloaded image. You update the `platform` section in the installation configuration file (`install-config.yaml`) with the image’s location before deploying the cluster.
    ```yaml title="Snippet of an install-config.yaml file that specifies the {{ op_system }} image"
    platform:
      nutanix:
        clusterOSImage: http://example.com/images/rhcos-411.86.202210041459-0-nutanix.x86_64.qcow2
    ```