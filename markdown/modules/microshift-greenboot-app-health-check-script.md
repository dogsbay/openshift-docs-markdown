{%- set _mod_docs_content_type = "CONCEPT" %}
# How to create a health check script for your application {id="microshift-greenboot-app-health-check-script_{{ context }}"}

You can create workload or application health check scripts in the text editor of your choice. Save the scripts in the `/etc/greenboot/check/required.d` directory. {._abstract}

When a script in the `/etc/greenboot/check/required.d` directory exits with an error, greenboot triggers a reboot in an attempt to heal the system.


:::note

Any script in the `/etc/greenboot/check/required.d` directory triggers a reboot if it exits with an error.

:::


If your health check logic requires any post-check steps, you can also create additional scripts and save them in the relevant greenboot directories. For example:

*   You can also place shell scripts you want to run after a boot has been declared successful in `/etc/greenboot/green.d`.
*   You can place shell scripts you want to run after a boot has been declared failed in `/etc/greenboot/red.d`. For example, if you have steps to heal the system before restarting, you can create scripts for your use case and place them in the `/etc/greenboot/red.d` directory.