{%- set _mod_docs_content_type = "CONCEPT" %}
# Embed application RPMs tutorial {id="microshift-embed-app-rpms-tutorial_{{ context }}"}

The following tutorial reviews the {{ microshift_short }} installation steps and adds a description of the workflow for embedding applications. If you are already familiar with `rpm-ostree` systems such as {{ op_system_ostree_first }} and {{ microshift_short }}, you can go straight to the procedures. {._abstract}

## Installation workflow review {id="microshift-installation-workflow-review_{{ context }}"}
Embedding applications requires a similar workflow to embedding {{ microshift_short }} into a {{ op_system_ostree }} image.

*   The following image shows how system artifacts such as RPMs, containers, and files are added to a blueprint and used by the image composer to create an ostree commit.
*   The ostree commit then can follow either the ISO path or the repository path to edge devices.
*   The ISO path can be used for disconnected environments, while the repository path is often used in places were the network is usually connected.

**Embedding {{ microshift_short }} workflow**

![title="Embedding MicroShift in a RHEL for Edge image workflow."](/_assets/images/468_RHbM_install_workflow_1023_1.png)

Reviewing these steps can help you understand the steps needed to embed an application:

1.  To embed {{ microshift_short }} on {{ op_system_ostree }}, you added the {{ microshift_short }} repositories to image builder.
1.  You created a blueprint that declared all the RPMs, container images, files and customizations you needed, including the addition of {{ microshift_short }}.
1.  You added the blueprint to image builder and ran a build with the image builder CLI tool (`composer-cli`). This step created `rpm-ostree` commits, which were used to create the container image. This image contained {{ op_system_ostree }}.
1.  You added the installer blueprint to image builder to create an `rpm-ostree` image (ISO) to boot from. This build contained both {{ op_system_ostree }} and {{ microshift_short }}.
1.  You downloaded the ISO with {{ microshift_short }} embedded, prepared it for use, provisioned it, then installed it onto your edge devices.

## Embed application RPMs workflow {id="microshift-embed-app-rpms-workflow_{{ context }}"}

After you have set up a build host that meets the image builder requirements, you can add your application in the form of a directory of manifests to the image. After those steps, the simplest way to embed your application or workload into a new ISO is to create your own RPMs that include the manifests. Your application RPMs contain all of the configuration files describing your deployment.

The following "Embedding applications workflow" image shows how Kubernetes application manifests and RPM spec files are combined in a single application RPM build. This build becomes the RPM artifact included in the workflow for embedding {{ microshift_short }} in an ostree commit.

**Embedding applications workflow**

![title="Embedding applications workflow."](/_assets/images/468_RHbM_install_workflow_1023_2.png)

The following procedures use the `rpmbuild` tool to create a specification file and local repository. The specification file defines how the package is built, moving your application manifests to the correct location inside the RPM package for {{ microshift_short }} to pick them up. That RPM package is then embedded in the ISO.