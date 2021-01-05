/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.dvdmanager.data;

import com.mycompany.dvdmanager.models.DvD;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

/**
 *
 * @author nacer
 */
@Repository
@Profile("database")
public class DvDDatabaseDao implements DvDDao{
    
    private final JdbcTemplate jdbcTemplate;
    
    @Autowired
    public DvDDatabaseDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    
    @Override
    public DvD findById(int id) {

        final String sql = "SELECT id, title, releaseYear, directorName, rating, notes "
                + "FROM DVDs WHERE id = ?;";

        return jdbcTemplate.queryForObject(sql, new DvDMapper(), id);
    }

    @Override
    public List<DvD> getAll() {
        final String sql = "SELECT id, title, releaseYear, directorName, rating, notes FROM DVDs;";
        return jdbcTemplate.query(sql, new DvDMapper());
    }

    @Override
    public List<DvD> findByReleaseYear(int ry) {
        final String sql = "SELECT id, title, releaseYear, directorName, rating, notes "
                + "FROM DVDs WHERE releaseYear = ?;";

        return jdbcTemplate.query(sql, new DvDMapper(), ry);
    }

    @Override
    public List<DvD> findByDirectorName(String dn) {
        final String sql = "SELECT id, title, releaseYear, directorName, rating, notes "
                + "FROM DVDs WHERE directorName = ?;";

        return jdbcTemplate.query(sql, new DvDMapper(), dn);
    }

    @Override
    public List<DvD> findByRating(String rating) {
        final String sql = "SELECT id, title, releaseYear, directorName, rating, notes "
                + "FROM DVDs WHERE rating = ?;";

        return jdbcTemplate.query(sql, new DvDMapper(), rating);
    }
    
    @Override
    public List<DvD> findByTitle(String title) {
        final String sql = "SELECT id, title, releaseYear, directorName, rating, notes "
                + "FROM DVDs WHERE title = ?;";

        return jdbcTemplate.query(sql, new DvDMapper(), title);
    }
    
    @Override
    public DvD add(DvD dvd){

        final String sql = "INSERT INTO DVDs(title, releaseYear, directorName, rating, notes) VALUES(?,?,?,?,?);";
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update((Connection conn) -> {

            PreparedStatement statement = conn.prepareStatement(
                sql, 
                Statement.RETURN_GENERATED_KEYS);

            statement.setString(1, dvd.getTitle());
            statement.setInt(2, dvd.getReleaseYear());
            statement.setString(3, dvd.getDirectorName());
            statement.setString(4, dvd.getRating());
            statement.setString(5, dvd.getNotes());
            return statement;

        }, keyHolder);

        dvd.setId(keyHolder.getKey().intValue());

        return dvd;
    }
    
    @Override
    public boolean update(DvD dvd) {

        final String sql = "UPDATE DVDs SET "
                + "title = ?, "
                + "releaseYear = ?, "
                + "directorName = ?, "
                + "rating = ?, "
                + "notes = ? "
                + "WHERE id = ?;";

        return jdbcTemplate.update(sql,
                dvd.getTitle(),
                dvd.getReleaseYear(),
                dvd.getDirectorName(),
                dvd.getRating(),
                dvd.getNotes(),
                dvd.getId()) > 0;
    }

    @Override
    public boolean deleteById(int id) {
        final String sql = "DELETE FROM DVDs WHERE id = ?;";
        return jdbcTemplate.update(sql, id) > 0;
    }
    
    private static final class DvDMapper implements RowMapper<DvD> {

        @Override
        public DvD mapRow(ResultSet rs, int index) throws SQLException {
            DvD dvd = new DvD();
            dvd.setId(rs.getInt("id"));
            dvd.setTitle(rs.getString("title"));
            dvd.setReleaseYear(rs.getInt("releaseYear"));
            dvd.setRating(rs.getString("rating"));
            dvd.setDirectorName(rs.getString("directorName"));
            dvd.setNotes(rs.getString("notes"));
            return dvd;
        }
    }
}
