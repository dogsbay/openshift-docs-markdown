{%- set _mod_docs_content_type = "PROCEDURE" %}
# Add {{ microshift_short }} repositories to image builder {id="adding-microshift-repos-image-builder_{{ context }}"}

Add the {{ microshift_short }} repositories to image builder on your build host. {._abstract}

{% leveloffset 1 %}{% include "./snippets/microshift-rhel10-bootc-not-osbuild.md" %}{% endleveloffset %}

**Prerequisites**

*   Your build host meets the image builder system requirements.
*   You have installed and set up image builder and the `composer-cli` tool.
*   You have root-user access to your build host.

**Procedure**

1.  Create an image builder configuration file for adding the `{{ rpm_repo_version }}`{minja} RPM repository source required to pull {{ microshift_short }} RPMs by running the following command:
    ```text {minja}
    cat > {{ rpm_repo_version }}.toml <<EOF
    id = "{{ rpm_repo_version }}"
    name = "Red Hat OpenShift Container Platform {{ ocp_version }} for RHEL {{ op_system_version_major }}"
    type = "yum-baseurl"
    url = "https://cdn.redhat.com/content/dist/layered/rhel9/$(uname -m)/rhocp/{{ ocp_version }}/os"
    check_gpg = true
    check_ssl = true
    system = false
    rhsm = true
    EOF
    ```
1.  Create an image builder configuration file for adding the `fast-datapath` RPM repository by running the following command:
    ```text
    cat > fast-datapath.toml <<EOF
    id = "fast-datapath"
    name = "Fast Datapath for RHEL 9"
    type = "yum-baseurl"
    url = "https://cdn.redhat.com/content/dist/layered/rhel9/$(uname -m)/fast-datapath/os"
    check_gpg = true
    check_ssl = true
    system = false
    rhsm = true
    EOF
    ```
1.  Add the sources to the image builder by running the following commands:
    ```terminal {minja}
    $ sudo composer-cli sources add {{ rpm_repo_version }}.toml
    ```
    ```terminal
    $ sudo composer-cli sources add fast-datapath.toml
    ```

**Verification**

*   Confirm that the sources were added properly by running the following command:
    ```terminal
    $ sudo composer-cli sources list
    ```
    ```terminal title="Example output" {minja}
    appstream
    baseos
    fast-datapath
    {{ rpm_repo_version }}
    ```

**Next steps**

*   Create the blueprint. For more information, see the following links:
    *   [Blueprint Reference](https://osbuild.org/docs/user-guide/blueprint-reference)
    *   [Creating a {{ op_system_ostree }} Container blueprint using image builder CLI](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/composing_installing_and_managing_rhel_for_edge_images/composing-a-rhel-for-edge-image-using-image-builder-command-line_composing-installing-managing-rhel-for-edge-images)
    *   [Building OSTree image](https://osbuild.org/docs/on-premises/commandline/building-ostree-images)
    *   [Installing Podman](https://podman.io/docs/installation)