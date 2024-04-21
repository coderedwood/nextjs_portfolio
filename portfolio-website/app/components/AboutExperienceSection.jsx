import React from 'react'

const experienceCollection = [
    {   timeSpan:"2019 - current",
        location:"Guardian Life Limited",
        roles:["Programmer Analyst","Transformation", "Data Engineering Solutions"],
        description:["Worked with COBOL, .NET and JSX related code.","Enabled development and launch of various digital transformation initiatives.",
        "Worked with DB2, Oracle, MongoDB, ETL Tools(Snaplogic) and Datalakes(Snowflake)"
        ]
    },
    {   timeSpan:"2016 - 2019",
        location:"Faculty of Medical Sciences Teaching and Research Complex",
        roles:["Multimedia Technologist", "Team Lead", "Multimedia Maintenance", "Streaming Solutions"],
        description:["Managed, Maintained and provided multimedia solutions through collaboration", "Managed a team of part-time workers and interns to provide scheduled streamed classes and events"]
    },
    {   timeSpan:"2012 - 2016",
        location:"Child Development Agency(formerly CDA, now Child Protection and Family Services Agency(CPFSA))",
        roles:["IT Technician", "Networking","Server Backups", "Client and Server Application Installations", "Wordpress Website Management"],
        description:["Worked with a team at the head office to provide technical support and repairs", "Built and repaired client machines, procured new hardware such as servers and repaired printers", "Supported server management through backups and software installations"
        ]
    }
];

function AboutExperienceSection() {
  return (
    <section>
        <div className='text-center py-4 mt-16'>
            <h1 className='mb-4 text-4xl lg:text-5xl xl:text-[80px] font-extrabold'>
                <span className={`text-black`}>Experience</span>
            </h1>
        </div>
        <div>
            {experienceCollection.map((experience,index) =>(
                <div key={index}>
                <h3>{experience.timeSpan}</h3>
                <h2>{experience.location}</h2>
                {experience.roles.map((role, index)=>(
                    <h2 key={index}>{role}</h2>
                ))}
                {experience.description.map((description, index)=>(
                    <p key={index}>{description}</p>
                ))}
                </div>
            ))}
        </div>
    </section>
  )
}

export default AboutExperienceSection