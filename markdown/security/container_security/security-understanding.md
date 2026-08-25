---
title: Understanding container security
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Understanding container security {id="security-understanding"}
{%- set context = "security-understanding" %}

You should understand how {{ product_title }} secures containerized workloads across multiple layers host, container orchestration, build, and application to help you meet your organization’s security requirements and compliance standards. {._abstract}

Securing a containerized application relies on multiple levels of security:

*   Container security begins with a trusted base container image and continues through the container build process as it moves through your CI/CD pipeline.

    :::important

    Image streams by default do not automatically update. This default behavior might create a security issue because security updates to images referenced by an image stream do not automatically occur. You can configure periodic importing to ensure your image streams receive security updates.
    
    :::

*   When a container is deployed, its security depends on it running on secure operating systems and networks, and establishing firm boundaries between the container itself and the users and hosts that interact with it.
*   Continued security relies on being able to scan container images for vulnerabilities and having an efficient way to correct and replace vulnerable images.

Beyond what a platform such as {{ product_title }} offers out of the box, your organization will likely have its own security demands. Some level of compliance verification might be needed before you can even bring {{ product_title }} into your data center.

Likewise, you might need to add your own agents, specialized hardware drivers, or encryption features to {{ product_title }}, before it can meet your organization’s security standards.

This guide provides a high-level walkthrough of the container security measures available in {{ product_title }}, including solutions for the host layer, the container and orchestration layer, and the build and application layer. It then points you to specific {{ product_title }} documentation to help you achieve those security measures.

This guide contains the following information:

*   Why container security is important and how it compares with existing security standards.
*   Which container security measures are provided by the host ({{ op_system }} and {{ op_system_base }}) layer and which are provided by {{ product_title }}.
*   How to evaluate your container content and sources for vulnerabilities.
*   How to design your build and deployment process to proactively check container content.
*   How to control access to containers through authentication and authorization.
*   How networking and attached storage are secured in {{ product_title }}.
*   Containerized solutions for API management and SSO.

The goal of this guide is to understand the incredible security benefits of using {{ product_title }} for your containerized workloads and how the entire Red Hat ecosystem plays a part in making and keeping containers secure. It will also help you understand how you can engage with the {{ product_title }} to achieve your organization’s security goals.

{% leveloffset +1 %}{% include "./modules/security-understanding-containers.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/security-understanding-openshift.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [Configuring periodic importing of imagestreamtags](/openshift_images/image-streams-manage#images-imagestreams-import_image-streams-managing)
*   [{{ product_title }} architecture](/architecture/architecture#architecture)
*   [OpenShift Security Guide](https://www.redhat.com/en/resources/openshift-security-guide-ebook)