{%- set _mod_docs_content_type = "CONCEPT" %}
# What are containers? {id="security-understanding-containers_{{ context }}"}

Containers package applications and their dependencies into single, portable images that you can use for consistent deployment across development, test, and production environments. {._abstract}

The image can be promoted from development, to test, to production, without change. A container might be part of a larger application that works closely with other containers. 

Containers provide consistency across environments and multiple deployment targets: physical servers, virtual machines (VMs), and private or public cloud.

Some of the benefits of using containers include:

| Infrastructure | Applications |
| --- | --- |
| Sandboxed application processes on a shared Linux operating system kernel | Package my application and all of its dependencies |
| Simpler, lighter, and denser than virtual machines | Deploy to any environment in seconds and enable CI/CD |
| Portable across different environments | Easily access and share containerized components |

**Additional resources**
{._additional-resources}

*   [Understanding Linux containers](https://www.redhat.com/en/topics/containers)
*   [Building, running, and managing containers](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/building_running_and_managing_containers/index)