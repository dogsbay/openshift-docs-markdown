{%- set _mod_docs_content_type = "CONCEPT" %}
# Benefits of enclave support {id="oc-mirror-enclave-support-about_{{ context }}"}

Enclave support restricts internal access to a specific part of a network. Unlike a demilitarized zone (DMZ) network, which allows inbound and outbound traffic access through firewall boundaries, enclaves do not cross firewall boundaries. {._abstract}

The new enclave support functionality is for scenarios where mirroring is needed for multiple enclaves that are secured behind at least one intermediate disconnected network.

Enclave support has the following benefits:

*   You can mirror content for multiple enclaves and centralize it in a single internal registry. Because some customers want to run security checks on the mirrored content, with this setup they can run these checks all at once. The content is then vetted before being mirrored to downstream enclaves.
*   You can mirror content directly from the centralized internal registry to enclaves without restarting the mirroring process from the internet for each enclave.
*   You can minimize data transfer between network stages, so to ensure that a blob or image is transferred only once from one stage to another.

## Enclave mirroring workflow {id="oc-mirror-enclave-how-to_{{ context }}"}

![Enclave Support](/_assets/images/445_OpenShift_Enclave_support_0724.png)

The previous image outlines the flow for using the oc-mirror plugin in different environments, including environments with and without an internet connection.

**Environment with Internet Connection**:

1.  The user executes oc-mirror plugin v2 to mirror content from an online registry to a local disk directory.
1.  The mirrored content is saved to the disk for transfer to offline environments.

**Disconnected Enterprise Environment (No Internet)**:

*   Flow 1:
    *   The user runs oc-mirror plugin v2 to load the mirrored content from the disk directory, which was transferred from the online environment, into the `enterprise-registry.in` registry.
*   Flow 2:
    1.  After updating the `registries.conf` file, the user executes the oc-mirror plugin v2 to mirror content from the `enterprise-registry.in` registry to an enclave environment.
    1.  The content is saved to a disk directory for transfer to the enclave.

**Enclave Environment (No Internet)**:

*   The user runs oc-mirror plugin v2 to load content from the disk directory into the `enclave-registry.in` registry.

The image visually represents the data flow across these environments and emphasizes the use of oc-mirror to handle disconnected and enclave environments without an internet connection.