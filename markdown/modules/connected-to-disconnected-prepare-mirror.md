{%- set _mod_docs_content_type = "PROCEDURE" %}
# Preparing the cluster for mirroring {id="connected-to-disconnected-prepare-mirror_{{ context }}"}

Before disconnecting your cluster, you must mirror, or copy, the images to a mirror registry that is reachable by every node in your disconnected cluster. {._abstract}

To mirror the images, you must prepare your cluster by:

*   Adding the mirror registry certificates to the list of trusted CAs on your host.
*   Creating a `.dockerconfigjson` file that contains your image pull secret, which is from the `cloud.openshift.com` token.

**Procedure**

1.  Configuring credentials that allow image mirroring:
    1.  Add the CA certificate for the mirror registry, in the simple PEM or DER file formats, to the list of trusted CAs. For example:
        ```terminal
        $ cp </path/to/cert.crt> /usr/share/pki/ca-trust-source/anchors/
        ```
        where:


        `</path/to/cert.crt>`
        :   Specifies the path to the certificate on your local file system.
    1.  Update the CA trust. For example, in Linux:
        ```terminal
        $ update-ca-trust
        ```
    1.  Extract the `.dockerconfigjson` file from the global pull secret:
        ```terminal
        $ oc extract secret/pull-secret -n openshift-config --confirm --to=.
        ```
        ```terminal title="Example output"
        .dockerconfigjson
        ```
    1.  Edit the `.dockerconfigjson` file to add your mirror registry and authentication credentials and save it as a new file:
        ```terminal
        {"auths":{"<local_registry>": {"auth": "<credentials>","email": "you@example.com"},"<registry>:<port>/<namespace>/":{"auth":"<token>"}}}
        ```

        where:

        `<local_registry>`
        :   Specifies the registry domain name, and optionally the port, that your mirror registry uses to serve content.

        `auth`
        :   Specifies the base64-encoded user name and password for your mirror registry.

        `<registry>:<port>/<namespace>`
        :   Specifies the mirror registry details.

        `<token>`
        :   Specifies  the base64-encoded `username:password` for your mirror registry.
        For example:
        ```terminal
        $ {"auths":{"cloud.openshift.com":{"auth":"b3BlbnNoaWZ0Y3UjhGOVZPT0lOMEFaUjdPUzRGTA==","email":"user@example.com"},
        "quay.io":{"auth":"b3BlbnNoaWZ0LXJlbGVhc2UtZGOVZPT0lOMEFaUGSTd4VGVGVUjdPUzRGTA==","email":"user@example.com"},
        "registry.connect.redhat.com"{"auth":"NTE3MTMwNDB8dWhjLTFEZlN3VHkxOSTd4VGVGVU1MdTpleUpoYkdjaUailA==","email":"user@example.com"},
        "registry.redhat.io":{"auth":"NTE3MTMwNDB8dWhjLTFEZlN3VH3BGSTd4VGVGVU1MdTpleUpoYkdjaU9fZw==","email":"user@example.com"},
        "registry.svc.ci.openshift.org":{"auth":"dXNlcjpyWjAwWVFjSEJiT2RKVW1pSmg4dW92dGp1SXRxQ3RGN1pwajJhN1ZXeTRV"},"my-registry:5000/my-namespace/":{"auth":"dXNlcm5hbWU6cGFzc3dvcmQ="}}}
        ```