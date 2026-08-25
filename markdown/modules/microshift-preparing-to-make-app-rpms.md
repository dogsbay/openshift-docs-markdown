{%- set _mod_docs_content_type = "PROCEDURE" %}
# Prepare to make application RPMs {id="microshift-preparing-to-make-app-rpms_{{ context }}"}

To build your own RPMs, choose a tool of your choice, such as the `rpmbuild` tool, and initialize the RPM build tree in your home directory. If your RPMs are accessible to image builder, you can use the method you prefer to build the application RPMs. {._abstract}

The following is an example procedure.

**Prerequisites**

*   You have set up a {{ op_system_ostree_first }} {{ op_system_version }} build host that meets the image builder system requirements.
*   You have root access to the host.

**Procedure**

1.  Install the `rpmbuild` tool and create the yum repository for it by running the following command:
    ```terminal
    $ sudo dnf install rpmdevtools rpmlint yum-utils createrepo
    ```
1.  Create the file tree you need to build RPM packages by running the following command:
    ```terminal
    $ rpmdev-setuptree
    ```

**Verification**

*   List the directories to confirm creation by running the following command:
    ```terminal
    $ ls ~/rpmbuild/
    ```
    ```terminal title="Example output"
    BUILD RPMS SOURCES SPECS SRPMS
    ```