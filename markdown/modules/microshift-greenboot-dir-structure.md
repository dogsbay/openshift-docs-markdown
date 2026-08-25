{%- set _mod_docs_content_type = "CONCEPT" %}
# How greenboot uses directories to run scripts {id="microshift-greenboot-dir-structure_{{ context }}"}

Greenboot uses directory-based framework to execute health check scripts during the system boot process. By organizing your custom scripts into specific directories, you can define the boot validation workflow and determine whether the system successfully applies an update or initiates an automated rollback. {._abstract}

Health check scripts run from four `/etc/greenboot` directories. These scripts run in alphabetical order. Keep this in mind when you configure the scripts for your workloads.

When the system starts, greenboot runs the scripts in the `required.d` and `wanted.d` directories. Depending on the outcome of those scripts, greenboot continues the startup or attempts a rollback as follows:

1.  System as expected: When all of the scripts in the `required.d` directory are successfully run, greenboot runs any scripts present in the `/etc/greenboot/green.d` directory.
1.  System trouble: If any of the scripts in the `required.d` directory fail, greenboot runs any prerollback scripts present in the `red.d` directory, then restarts the system.


:::note

Greenboot redirects script and health check output to the system log. When you are logged in, a daily message provides the overall system health output.

:::