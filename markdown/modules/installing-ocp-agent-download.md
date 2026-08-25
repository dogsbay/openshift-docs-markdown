{%- set _mod_docs_content_type = "PROCEDURE" %}
# Downloading the Agent-based Installer {id="installing-ocp-agent-retrieve_{{ context }}"}

Begin the installation process by downloading the Agent-based Installer and the CLI needed for your installation. {._abstract}

**Procedure**

1.  Log in to the {{ hybrid_console }} using your login credentials.
1.  Navigate to [Datacenter](https://console.redhat.com/openshift/create/datacenter).
1.  Click **Run Agent-based Installer locally**.
1.  Select the operating system and architecture for the **OpenShift Installer** and **Command line interface**.
1.  Click **Download Installer** to download and extract the install program.
1.  Download or copy the pull secret by clicking on **Download pull secret** or **Copy pull secret**.
1.  Click **Download command-line tools** and place the `openshift-install` binary in a directory that is on your `PATH`.